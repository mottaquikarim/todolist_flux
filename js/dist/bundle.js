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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TodoInput = __webpack_require__(1);

var _ListItem = __webpack_require__(3);

// const todos = []; they will be ListItems
var AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: 'LOL'
};

var createNewTodo = function createNewTodo(oldStore, props) {

	// ... update the old store

	var newTodoText = props.newTodoText;
	var todos = oldStore.todos;

	// ... create new store

	var newStore = Object.assign({}, oldStore, {
		todos: todos.concat((0, _ListItem.listItem)(newTodoText))
	});

	// ... return new data
	return newStore;
};

var actions = {
	"CREATE_TODO": function CREATE_TODO(oldStore, additionalProps) {
		return createNewTodo(oldStore, additionalProps);
	},
	"MARK_COMPLETED": function MARK_COMPLETED() {}
};

var dispatcher = function dispatcher(store, render) {
	return function (actionName, props) {
		store = actions[actionName](store, props);
		render(store);
	}; // what to return
}; // dispatcher

function appRender(store) {
	_TodoInput.todoInput.render(store.currentTodoValue);
	todoList(store.todos);
}
var myApplicationDispatch = dispatcher(AppData, appRender);
(0, _TodoInput.todoInput)(AppData.currentTodoValue, '#app');

myApplicationDispatch('CREATE_TODO', {
	newTodoText: 'wake up'
});
myApplicationDispatch('CREATE_TODO', {
	newTodoText: 'drank'
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (11:6)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mrender()\u001b[33m;\u001b[39m\n \u001b[90m 10 | \u001b[39m\t}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mroot\u001b[33m.\u001b[39maddEventListener(\u001b[32m'keydown'\u001b[39m\u001b[33m,\u001b[39m (e) \u001b[33m=>\u001b[39m {\n \u001b[90m    | \u001b[39m\t\t    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m\t\t\t\u001b[36mconst\u001b[39m {target\u001b[33m,\u001b[39m keyCode} \u001b[33m=\u001b[39m e\u001b[33m;\u001b[39m\n \u001b[90m 13 | \u001b[39m\t\t\t\u001b[36mif\u001b[39m (target\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39mcontains(\u001b[32m'input'\u001b[39m) \u001b[33m||\u001b[39m target\u001b[33m.\u001b[39mclosest(\u001b[32m'input'\u001b[39m)) {\n \u001b[90m 14 | \u001b[39m\t\t\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mupdateValue(target\u001b[33m.\u001b[39mvalue\u001b[33m,\u001b[39m keyCode)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.listItem = listItem;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListItem = exports.ListItem = function () {
	function ListItem(todoItem) {
		_classCallCheck(this, ListItem);

		this.do = todoItem;
		this.complete = false;
	}

	_createClass(ListItem, [{
		key: "markCompleted",
		value: function markCompleted() {
			this.complete = true;
		}
	}]);

	return ListItem;
}();

function listItem() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(ListItem, [null].concat(args)))();
}

/***/ })
/******/ ]);