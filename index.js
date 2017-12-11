const bel = require('bel')

const state = {
	current: {},
	elements: {},
	completed: []
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function clamp(value, min, max) {
	return Math.max(Math.min(value, max), min)
}

const getSelectedSet = () => {
	if (state.isArray) {
		return [...state.data]
	} else {
		return [...state.data[state.set]]
	}
}

const reset = () => {
	state.current.set = getSelectedSet()
	state.completed = []
	setTimeout(() => {
		state.elements.progress.style.width = '0'
	}, 700)
}

const selectAnswer = event => {
	const answer = event.target.innerText
	if (answer === state.current.answer) {
		event.target.classList.add('right')
		state.completed.push(state.current.item)
		state.current.set.splice(state.current.setIndex, 1)
		state.elements.progress.style.width = `${(state.completed.length / getSelectedSet().length) * 100}%`
		if (state.current.set.length === 0) {
			reset()
		}
	} else {
		event.target.classList.add('wrong')
	}
	setTimeout(displayQuestion, 1000)
}

const init = data => {
	state.data = data

	if (Array.isArray(data)) {
		state.isArray = true
		state.sets = null
		state.set = null
	} else {
		state.isArray = false
		state.sets = Object.keys(data)
		state.set = state.sets[0]
	}

	state.modes = Object.keys(getSelectedSet()[0])
	state.qMode = state.modes[0]
	state.aMode = state.modes[1]
	state.maxWords = 5
}

const createAnwers = ([a, b, c, d]) => {
	return bel`
		<div class="answers">
			<div class="answer" onclick=${selectAnswer}>${ a[state.aMode] }</div>
			<div class="answer" onclick=${selectAnswer}>${ b[state.aMode] }</div>
			<div class="answer" onclick=${selectAnswer}>${ c[state.aMode] }</div>
			<div class="answer" onclick=${selectAnswer}>${ d[state.aMode] }</div>
		</div>
	`
}

const createQuestion = () => {
	const selectedSet = getSelectedSet()

	const index = getRandomInt(0, Math.min(state.maxWords, state.current.set.length) - 1)
	state.current.setIndex = index
	state.current.item = state.current.set[index]
	state.current.question = state.current.set[index][state.qMode]
	state.current.answer = state.current.set[index][state.aMode]

	const answers = []

	while (answers.length < 4) {
		const n = getRandomInt(0, Math.max(state.completed.length, 5) - 1)
		const item = [...state.completed, ...state.current.set][n]

		if (state.current.item[state.aMode] == item[state.aMode] || answers.includes(item)) {
			continue
		}

		answers[answers.length] = item
	}

	answers[getRandomInt(0, 3)] = state.current.set[index]

	return bel`
		<div class="container">
			<div class="progress-background">
				${ state.elements.progress }
			</div>
			${ createAnwers(answers) }
			<div class="question">
				${ state.current.item[state.qMode] }
			</div>
		</div>
	`
}

const displayQuestion = () => {
	const containerElement = createQuestion()
	if (state.elements.container) {
		document.body.replaceChild(containerElement, state.elements.container)
	} else {
		document.body.appendChild(containerElement)
	}
	state.elements.container = containerElement
}

const start = () => {
	const checkedSet = document.querySelector('input[name=set]:checked')
	if (checkedSet) {
		state.set = checkedSet.value
	}
	const qMode = document.querySelector('input[name=order]:checked').value
	
	if (qMode === state.aMode) {
		state.aMode = state.qMode
		state.qMode = qMode
	}

	state.current.set = getSelectedSet()
	state.elements.progress = bel`<div class="progress"></div>`
	state.elements.container = createQuestion()
	document.body.replaceChild(state.elements.container, state.elements.settings)
}

const createSettings = () => {
	const createSetSettings = () => {
		if (state.sets && state.sets.length > 0) {
			const createOption = (set, i) => {
				return bel`
					<p>
						<input name="set" type="radio" id="set-${ i }" value="${ set }" ${ i === 0 ? 'checked' : '' } />
						<label for="set-${ i }"> ${ set }</label>
					</p>
				`
			}

			return bel`
				<div>
					<h4>Choose Set:</h4>
					${ state.sets.map(createOption) }
				</div>
			`
		}
	}

	const createOderSettings = () => {
		return bel`
			<div>
				<h4>Choose Order:</h4>
				<p>
					<input name="order" type="radio" id="order-1" value="${ state.modes[0] }" checked />
					<label for="order-1"> ${ state.modes[0] + ' -> ' + state.modes[1] }</label>
				</p>
				<p>
					<input name="order" type="radio" id="order-2" value="${ state.modes[1] }" />
					<label for="order-2"> ${ state.modes[1] + ' -> ' + state.modes[0] }</label>
				</p>
			</div>
		`
	}

	const createExtraSettings = () => {
		return bel`
			<div>
				${ createSetSettings() }
				${ createOderSettings() }
				<button onclick=${start}>Start</button>
			</div>
		`
	}

	const jsonUrlField = bel`<input type="text" id="json-url" autofocus value="kana.json" />`

	jsonUrlField.onkeydown = event => {
		if (event.keyCode === 13) {
			load()
		}
	}

	const load = () => {
		const jsonUrl = jsonUrlField.value
		if (jsonUrl.length === 0) return

		fetch(jsonUrl)
		.then(response => response.json())
		.then(data => {
			init(data)
			const etraSettings = createExtraSettings()
			if (state.elements.extraSettings) {
				state.elements.settings.replaceChild(etraSettings, state.elements.extraSettings)
			} else {
				state.elements.settings.appendChild(etraSettings)
			}
			state.elements.extraSettings = etraSettings
		})
		.catch(console.error)
	}

	state.elements.settings = bel`
		<div class="settings">
			<h4>Load Vocab JSON:</h4>
			${ jsonUrlField }
			<button onclick=${ load }>Load</button>
		</div>
	`
	return state.elements.settings
}

document.body.appendChild(createSettings())
