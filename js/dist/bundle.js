/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TodoInput = __webpack_require__(2);

var AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: 'LOL'
}; // const todos = []; they will be ListItems


(0, _TodoInput.todoInput)(AppData.currentTodoValue, '#app');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.todoInput = todoInput;

var _BaseComponent2 = __webpack_require__(3);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoInput = function (_BaseComponent) {
	_inherits(TodoInput, _BaseComponent);

	function TodoInput(currentTodoValue, container) {
		_classCallCheck(this, TodoInput);

		var _this = _possibleConstructorReturn(this, (TodoInput.__proto__ || Object.getPrototypeOf(TodoInput)).call(this, container));

		_this.value = currentTodoValue;
		_this.initEvents();
		_this.render();
		return _this;
	}

	_createClass(TodoInput, [{
		key: 'initEvents',
		value: function initEvents() {
			var _this2 = this;

			this.root.addEventListener('keydown', function (e) {
				var target = e.target,
				    keyCode = e.keyCode;

				if (target.classList.contains('input') || target.closest('input')) {
					_this2.updateValue(target.value, keyCode);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			this.root.innerHTML = '\n<div class="ui fluid icon input">\n    <input type="text" placeholder="Search a very wide input..." value=' + this.value + ' autofocus="true">\n    <i class="search icon"></i>\n</div> \t\t\n\t\t';
		}
	}, {
		key: 'updateValue',
		value: function updateValue(value, keyCode) {
			console.log('OLD value', this.value, keyCode);
			if (keyCode === 13) {
				this.value = value;
				this.render();
			}
			console.log('NEW value', this.value);
		}
	}]);

	return TodoInput;
}(_BaseComponent3.default);

function todoInput() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(TodoInput, [null].concat(args)))();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getSuperRandomNum = function getSuperRandomNum() {
	return Date.now() * Math.floor(Math.random() * 10);
};

var BaseComponent = function BaseComponent(container) {
	_classCallCheck(this, BaseComponent);

	var root = document.createElement('div');
	root.classList.add('js-input-' + getSuperRandomNum());
	document.querySelector(container).appendChild(root);

	this.root = root;
};

exports.default = BaseComponent;

/***/ })
/******/ ]);