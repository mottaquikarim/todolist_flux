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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
	var className = 'js-input-' + getSuperRandomNum();
	root.classList.add(className);
	document.querySelector(container).appendChild(root);

	this.root = root;
	this.rootClassName = '.' + className;
};

exports.default = BaseComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.actions = undefined;

var _reducers = __webpack_require__(9);

var actions = exports.actions = {
	"CREATE_TODO": function CREATE_TODO() {
		return _reducers.createNewTodo.apply(undefined, arguments);
	},
	"DELETE_TODO": function DELETE_TODO(oldStore, additionalProps) {
		return (0, _reducers.deleteTodo)(oldStore, additionalProps);
	},
	"MARK_COMPLETED": function MARK_COMPLETED(oldStore, additionalProps) {
		return (0, _reducers.markCompleted)(oldStore, additionalProps);
	}
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.todoInput = todoInput;

var _BaseComponent2 = __webpack_require__(0);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoInput = function (_BaseComponent) {
	_inherits(TodoInput, _BaseComponent);

	function TodoInput(currentTodoValue, container, dispatcher) {
		_classCallCheck(this, TodoInput);

		var _this = _possibleConstructorReturn(this, (TodoInput.__proto__ || Object.getPrototypeOf(TodoInput)).call(this, container));

		_this.dispatcher = dispatcher || function () {
			return null;
		};

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
		key: 'refreshProps',
		value: function refreshProps(newObj) {
			this.value = newObj;
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			this.root.innerHTML = '\n<div class="ui fluid icon input">\n    <input type="text" placeholder="Search a very wide input..." value="' + this.value + '" autofocus="true">\n    <i class="search icon"></i>\n</div> \t\t\n\t\t';
		}
	}, {
		key: 'updateValue',
		value: function updateValue(value, keyCode) {
			if (keyCode === 13) {
				console.log('dispatching', value);

				this.dispatcher('CREATE_TODO', {
					newTodoText: value
				});
			}
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
exports.TodoList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.todoList = todoList;

var _BaseComponent2 = __webpack_require__(0);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _TodoItem = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(_TodoItem.TodoItem);

var TodoList = exports.TodoList = function (_BaseComponent) {
    _inherits(TodoList, _BaseComponent);

    function TodoList(todos, container, dispatcher) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, container));

        _this.dispatcher = dispatcher;
        _this.container = container;
        _this.todoItemComponents = todos.map(function (todo) {
            return new _TodoItem.TodoItem(todo, _this.rootClassName, _this.dispatcher);
        });
        return _this;
    }

    _createClass(TodoList, [{
        key: 'refreshProps',
        value: function refreshProps(newProps) {
            var _this2 = this;

            this.root.innerHTML = '';

            this.todoItemComponents = newProps.map(function (todo) {
                return new _TodoItem.TodoItem(todo, _this2.rootClassName, _this2.dispatcher);
            });
        }
    }]);

    return TodoList;
}(_BaseComponent3.default);

function todoList() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(TodoList, [null].concat(args)))();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var dispatcher = exports.dispatcher = function dispatcher(store, actions, render) {
	return function (actionName, props) {
		store = actions[actionName](store, props);
		render(store);
	}; // what to return
}; // dispatcher

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppData = exports.AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: ''
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.listItem = listItem;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListItem = exports.ListItem = function () {
	function ListItem(todoItem, index) {
		_classCallCheck(this, ListItem);

		this.do = todoItem;
		this.complete = false;
		this.index = index;
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TodoItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.todoItem = todoItem;

var _BaseComponent2 = __webpack_require__(0);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = exports.TodoItem = function (_BaseComponent) {
    _inherits(TodoItem, _BaseComponent);

    function TodoItem(ListItem, container, dispatcher) {
        _classCallCheck(this, TodoItem);

        var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, container));

        _this.dispatcher = dispatcher;
        _this.data = ListItem;
        console.log(_this.data);

        _this.initEvents();
        _this.render();
        return _this;
    }

    _createClass(TodoItem, [{
        key: 'initEvents',
        value: function initEvents() {
            var _this2 = this;

            this.root.addEventListener('click', function (e) {
                var target = e.target,
                    keyCode = e.keyCode;

                if (target.classList.contains('js-remove') || target.closest('.js-remove')) {
                    _this2.dispatcher('DELETE_TODO', {
                        index: _this2.data.index
                    });
                }
                if (target.classList.contains('js-mark-completed') || target.closest('.js-mark-completed')) {
                    _this2.dispatcher('MARK_COMPLETED', {
                        index: _this2.data.index
                    });
                }
            });
        }
    }, {
        key: 'refreshProps',
        value: function refreshProps(newProps) {
            this.data = newProps;
            this.render();
        }
    }, {
        key: 'render',
        value: function render() {
            var isComplete = this.data.complete ? 'green' : '';
            var hideButton = this.data.complete ? 'display: none;' : '';
            this.root.innerHTML = '\n<div class="ui segment ' + isComplete + '">\n    <div style="display: flex; width: 100%;">\n        <h4 style="margin-bottom: 0;">' + this.data.do + '</h4>\n        <i style="text-align: right; width: 100%; cursor: pointer;" class="icon remove js-remove"></i>\n    </div>\n    <div style="text-align: right; margin-top: 10px; ' + hideButton + '">\n        <button class="ui button green mini js-mark-completed">Mark Completed</button>\n    </div>\n</div>\n        ';
        }
    }]);

    return TodoItem;
}(_BaseComponent3.default);

function todoItem() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(TodoItem, [null].concat(args)))();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(4);

var _store = __webpack_require__(5);

var _actions = __webpack_require__(1);

var _TodoInput = __webpack_require__(2);

var _TodoList = __webpack_require__(3);

/* COMPONENTS */
document.querySelector('#app').innerHTML = ""; /* FLUX REQUIREMENTS */


var myApplicationDispatch = (0, _dispatcher.dispatcher)(_store.AppData, _actions.actions, function (store) {
  t.refreshProps(store.currentTodoValue);
  list.refreshProps(store.todos);
});

var t = (0, _TodoInput.todoInput)(_store.AppData.currentTodoValue, '#app', myApplicationDispatch);
var list = (0, _TodoList.todoList)(_store.AppData.todos, '#app', myApplicationDispatch);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.markCompleted = exports.deleteTodo = exports.createNewTodo = undefined;

var _ListItem = __webpack_require__(6);

var createNewTodo = exports.createNewTodo = function createNewTodo(oldStore, props) {

	// ... update the old store

	var newTodoText = props.newTodoText;
	var todos = oldStore.todos;

	// ... create new store

	var newStore = Object.assign({}, oldStore, {
		todos: todos.concat((0, _ListItem.listItem)(newTodoText, todos.length)),
		currentTodoValue: ''
	});

	// ... return new data
	return newStore;
};

var deleteTodo = exports.deleteTodo = function deleteTodo(oldStore, props) {
	console.log('MADE IT TO REDUCER LOL', props);
	var todos = oldStore.todos;
	var oldIndex = props.index;


	var newTodos = [];
	var i = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var oldTodo = _step.value;

			if (oldTodo.index === oldIndex) {
				continue;
			}

			oldTodo.index = i;
			newTodos.push(oldTodo);
			i++;
		}
		// ... create new store
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var newStore = Object.assign({}, oldStore, {
		todos: newTodos
	});
	return newStore;
};

var markCompleted = exports.markCompleted = function markCompleted(oldStore, props) {
	console.log('LOL in markCompleted tho');
	var todos = oldStore.todos;
	var oldIndex = props.index;

	// ALSO VALID:
	// const todoItemToComplete = todos[oldIndex];
	// todoItemToComplete.markCompleted();

	todos[oldIndex].markCompleted();

	// ... create new store
	var newStore = Object.assign({}, oldStore, {
		todos: todos.slice(0)
	});
	return newStore;
};

/***/ })
/******/ ]);