(function () {
  var socket = document.createElement('script')
  var script = document.createElement('script')
  socket.setAttribute('src', 'http://127.0.0.1:1337/socket.io/socket.io.js')
  script.type = 'text/javascript'

  socket.onload = function () {
    document.head.appendChild(script)
  }
  script.text = ['window.socket = io("http://127.0.0.1:1337");',
  'socket.on("bundle", function() {',
  'console.log("livereaload triggered")',
  'window.location.reload();});'].join('\n')
  document.head.appendChild(socket)
}());
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n\t\t<div class="answers">\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t</div>\n\t'], ['\n\t\t<div class="answers">\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t\t<div class="answer" onclick=', '>', '</div>\n\t\t</div>\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t<div class="container">\n\t\t\t<div class="progress-background">\n\t\t\t\t', '\n\t\t\t</div>\n\t\t\t', '\n\t\t\t<div class="question">\n\t\t\t\t', '\n\t\t\t</div>\n\t\t</div>\n\t'], ['\n\t\t<div class="container">\n\t\t\t<div class="progress-background">\n\t\t\t\t', '\n\t\t\t</div>\n\t\t\t', '\n\t\t\t<div class="question">\n\t\t\t\t', '\n\t\t\t</div>\n\t\t</div>\n\t']),
    _templateObject3 = _taggedTemplateLiteral(['<div class="progress"></div>'], ['<div class="progress"></div>']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input name="set" type="radio" id="set-', '" value="', '" ', ' />\n\t\t\t\t\t\t<label for="set-', '"> ', '</label>\n\t\t\t\t\t</p>\n\t\t\t\t'], ['\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input name="set" type="radio" id="set-', '" value="', '" ', ' />\n\t\t\t\t\t\t<label for="set-', '"> ', '</label>\n\t\t\t\t\t</p>\n\t\t\t\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\t\t\t<div>\n\t\t\t\t\t<h4>Choose Set:</h4>\n\t\t\t\t\t', '\n\t\t\t\t</div>\n\t\t\t'], ['\n\t\t\t\t<div>\n\t\t\t\t\t<h4>Choose Set:</h4>\n\t\t\t\t\t', '\n\t\t\t\t</div>\n\t\t\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t\t\t<div>\n\t\t\t\t<h4>Choose Order:</h4>\n\t\t\t\t<p>\n\t\t\t\t\t<input name="order" type="radio" id="order-1" value="', '" checked />\n\t\t\t\t\t<label for="order-1"> ', '</label>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<input name="order" type="radio" id="order-2" value="', '" />\n\t\t\t\t\t<label for="order-2"> ', '</label>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div>\n\t\t\t\t<h4>Choose Order:</h4>\n\t\t\t\t<p>\n\t\t\t\t\t<input name="order" type="radio" id="order-1" value="', '" checked />\n\t\t\t\t\t<label for="order-1"> ', '</label>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<input name="order" type="radio" id="order-2" value="', '" />\n\t\t\t\t\t<label for="order-2"> ', '</label>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t\t\t<div>\n\t\t\t\t', '\n\t\t\t\t', '\n\t\t\t\t<button onclick=', '>Start</button>\n\t\t\t</div>\n\t\t'], ['\n\t\t\t<div>\n\t\t\t\t', '\n\t\t\t\t', '\n\t\t\t\t<button onclick=', '>Start</button>\n\t\t\t</div>\n\t\t']),
    _templateObject8 = _taggedTemplateLiteral(['<input type="text" id="json-url" autofocus value="kana.json" />'], ['<input type="text" id="json-url" autofocus value="kana.json" />']),
    _templateObject9 = _taggedTemplateLiteral(['\n\t\t<div class="settings">\n\t\t\t<h4>Load Vocab JSON:</h4>\n\t\t\t', '\n\t\t\t<button onclick=', '>Load</button>\n\t\t</div>\n\t'], ['\n\t\t<div class="settings">\n\t\t\t<h4>Load Vocab JSON:</h4>\n\t\t\t', '\n\t\t\t<button onclick=', '>Load</button>\n\t\t</div>\n\t']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var bel = require('bel');

var state = {
	current: {},
	elements: {},
	completed: []
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
	return Math.max(Math.min(value, max), min);
}

var getSelectedSet = function getSelectedSet() {
	if (state.isArray) {
		return [].concat(_toConsumableArray(state.data));
	} else {
		return [].concat(_toConsumableArray(state.data[state.set]));
	}
};

var reset = function reset() {
	state.current.set = getSelectedSet();
	state.completed = [];
	setTimeout(function () {
		state.elements.progress.style.width = '0';
	}, 700);
};

var selectAnswer = function selectAnswer(event) {
	var answer = event.target.innerText;
	if (answer === state.current.answer) {
		event.target.classList.add('right');
		state.completed.push(state.current.item);
		state.current.set.splice(state.current.setIndex, 1);
		state.elements.progress.style.width = state.completed.length / getSelectedSet().length * 100 + '%';
		if (state.current.set.length === 0) {
			reset();
		}
	} else {
		event.target.classList.add('wrong');
	}
	setTimeout(displayQuestion, 1000);
};

var init = function init(data) {
	state.data = data;

	if (Array.isArray(data)) {
		state.isArray = true;
		state.sets = null;
		state.set = null;
	} else {
		state.isArray = false;
		state.sets = Object.keys(data);
		state.set = state.sets[0];
	}

	state.modes = Object.keys(getSelectedSet()[0]);
	state.qMode = state.modes[0];
	state.aMode = state.modes[1];
	state.maxWords = 5;
};

var createAnwers = function createAnwers(_ref) {
	var _ref2 = _slicedToArray(_ref, 4),
	    a = _ref2[0],
	    b = _ref2[1],
	    c = _ref2[2],
	    d = _ref2[3];

	return bel(_templateObject, selectAnswer, a[state.aMode], selectAnswer, b[state.aMode], selectAnswer, c[state.aMode], selectAnswer, d[state.aMode]);
};

var createQuestion = function createQuestion() {
	var selectedSet = getSelectedSet();

	var index = getRandomInt(0, Math.min(state.maxWords, state.current.set.length) - 1);
	state.current.setIndex = index;
	state.current.item = state.current.set[index];
	state.current.question = state.current.set[index][state.qMode];
	state.current.answer = state.current.set[index][state.aMode];

	var answers = [];

	while (answers.length < 4) {
		var n = getRandomInt(0, Math.max(state.completed.length, 5) - 1);
		var item = [].concat(_toConsumableArray(state.completed), _toConsumableArray(state.current.set))[n];

		if (state.current.item[state.aMode] == item[state.aMode] || answers.includes(item)) {
			continue;
		}

		answers[answers.length] = item;
	}

	answers[getRandomInt(0, 3)] = state.current.set[index];

	return bel(_templateObject2, state.elements.progress, createAnwers(answers), state.current.item[state.qMode]);
};

var displayQuestion = function displayQuestion() {
	var containerElement = createQuestion();
	if (state.elements.container) {
		document.body.replaceChild(containerElement, state.elements.container);
	} else {
		document.body.appendChild(containerElement);
	}
	state.elements.container = containerElement;
};

var start = function start() {
	var checkedSet = document.querySelector('input[name=set]:checked');
	if (checkedSet) {
		state.set = checkedSet.value;
	}
	var qMode = document.querySelector('input[name=order]:checked').value;

	if (qMode === state.aMode) {
		state.aMode = state.qMode;
		state.qMode = qMode;
	}

	state.current.set = getSelectedSet();
	state.elements.progress = bel(_templateObject3);
	state.elements.container = createQuestion();
	document.body.replaceChild(state.elements.container, state.elements.settings);
};

var createSettings = function createSettings() {
	var createSetSettings = function createSetSettings() {
		if (state.sets && state.sets.length > 0) {
			var createOption = function createOption(set, i) {
				return bel(_templateObject4, i, set, i === 0 ? 'checked' : '', i, set);
			};

			return bel(_templateObject5, state.sets.map(createOption));
		}
	};

	var createOderSettings = function createOderSettings() {
		return bel(_templateObject6, state.modes[0], state.modes[0] + ' -> ' + state.modes[1], state.modes[1], state.modes[1] + ' -> ' + state.modes[0]);
	};

	var createExtraSettings = function createExtraSettings() {
		return bel(_templateObject7, createSetSettings(), createOderSettings(), start);
	};

	var jsonUrlField = bel(_templateObject8);

	jsonUrlField.onkeydown = function (event) {
		if (event.keyCode === 13) {
			load();
		}
	};

	var load = function load() {
		var jsonUrl = jsonUrlField.value;
		if (jsonUrl.length === 0) return;

		fetch(jsonUrl).then(function (response) {
			return response.json();
		}).then(function (data) {
			init(data);
			var etraSettings = createExtraSettings();
			if (state.elements.extraSettings) {
				state.elements.settings.replaceChild(etraSettings, state.elements.extraSettings);
			} else {
				state.elements.settings.appendChild(etraSettings);
			}
			state.elements.extraSettings = etraSettings;
		}).catch(console.error);
	};

	state.elements.settings = bel(_templateObject9, jsonUrlField, load);
	return state.elements.settings;
};

document.body.appendChild(createSettings());

},{"bel":3}],2:[function(require,module,exports){
var trailingNewlineRegex = /\n[\s]+$/
var leadingNewlineRegex = /^\n[\s]+/
var trailingSpaceRegex = /[\s]+$/
var leadingSpaceRegex = /^[\s]+/
var multiSpaceRegex = /[\n\s]+/g

var TEXT_TAGS = [
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
]

var CODE_TAGS = [
  'code', 'pre'
]

module.exports = function appendChild (el, childs) {
  if (!Array.isArray(childs)) return

  var nodeName = el.nodeName.toLowerCase()

  var hadText = false
  var value, leader

  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      appendChild(el, node)
      continue
    }

    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      typeof node === 'function' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }

    var lastChild = el.childNodes[el.childNodes.length - 1]

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node

      // We didn't have a text node yet, create one
      } else {
        node = document.createTextNode(node)
        el.appendChild(node)
        lastChild = node
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          CODE_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        } else if (CODE_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' '
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, leader)
            .replace(leadingSpaceRegex, ' ')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

    // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          CODE_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        // Trim the child nodes if the current node is not a node
        // where all whitespace must be preserved
        } else if (CODE_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingSpaceRegex, ' ')
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName
      if (_nodeName) nodeName = _nodeName.toLowerCase()

      // Append the node to the DOM
      el.appendChild(node)
    }
  }
}

},{}],3:[function(require,module,exports){
var hyperx = require('hyperx')
var appendChild = require('./appendChild')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var BOOL_PROPS = [
  'autofocus', 'checked', 'defaultchecked', 'disabled', 'formnovalidate',
  'indeterminate', 'readonly', 'required', 'selected', 'willvalidate'
]

var COMMENT_TAG = '!--'

var SVG_TAGS = [
  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

function belCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag)
  } else if (tag === COMMENT_TAG) {
    return document.createComment(props.comment)
  } else {
    el = document.createElement(tag)
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS.indexOf(key) !== -1) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val)
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val)
          }
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  appendChild(el, children)
  return el
}

module.exports = hyperx(belCreateElement, {comments: true})
module.exports.default = module.exports
module.exports.createElement = belCreateElement

},{"./appendChild":2,"hyperx":5}],4:[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],5:[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            if (parts[i][0] === CLOSE) {
              i--
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)],[CLOSE])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":4}]},{},[1]);
