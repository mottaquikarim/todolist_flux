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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getSuperRandomNum = function getSuperRandomNum() {
	return Date.now() * Math.floor(Math.random() * 10);
};

var BaseComponent = function () {
	function BaseComponent(container) {
		_classCallCheck(this, BaseComponent);

		var root = document.createElement('div');
		var className = 'js-input-' + getSuperRandomNum();
		root.classList.add(className);
		document.querySelector(container).appendChild(root);

		this.root = root;
		this.rootClassName = '.' + className;
	}

	_createClass(BaseComponent, [{
		key: 'isTarget',
		value: function isTarget(className, target) {
			return target.classList.contains(className) || target.closest('.' + className);
		}
	}]);

	return BaseComponent;
}();

exports.default = BaseComponent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.actions = undefined;

var _reducers = __webpack_require__(12);

var actions = exports.actions = {
	"CREATE_TODO": function CREATE_TODO() {
		return _reducers.createNewTodo.apply(undefined, arguments);
	},
	"DELETE_TODO": function DELETE_TODO(oldStore, additionalProps) {
		return (0, _reducers.deleteTodo)(oldStore, additionalProps);
	},
	"TOGGLE_COMPLETE": function TOGGLE_COMPLETE() {
		return _reducers.toggleComplete.apply(undefined, arguments);
	},
	"TOGGLE_IMPORTANT": function TOGGLE_IMPORTANT() {
		return _reducers.toggleImportant.apply(undefined, arguments);
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.betterCounter = exports.BetterCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseComponent2 = __webpack_require__(0);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BetterCounter = exports.BetterCounter = function (_BaseComponent) {
	_inherits(BetterCounter, _BaseComponent);

	function BetterCounter(props, container) {
		_classCallCheck(this, BetterCounter);

		var _this = _possibleConstructorReturn(this, (BetterCounter.__proto__ || Object.getPrototypeOf(BetterCounter)).call(this, container));

		var numLeft = props.numLeft,
		    numComplete = props.numComplete;

		_this.numLeft = numLeft;
		_this.numComplete = numComplete;

		_this.render();
		return _this;
	}

	_createClass(BetterCounter, [{
		key: 'refreshProps',
		value: function refreshProps(newProps) {
			var numLeft = newProps.numLeft,
			    numComplete = newProps.numComplete;

			this.numLeft = numLeft;
			this.numComplete = numComplete;

			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			var numLeft = this.numLeft,
			    numComplete = this.numComplete;

			this.root.innerHTML = '\n<div>\n\tnumLeft: ' + numLeft + ' / numComplete: ' + numComplete + '\n</div>\n\t\t';
		}
	}]);

	return BetterCounter;
}(_BaseComponent3.default);

// export function counter(...args) {
// 	return new Counter(...args);
// }

var betterCounter = exports.betterCounter = function betterCounter() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(BetterCounter, [null].concat(args)))();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.todoInput = todoInput;

var _BaseComponent2 = __webpack_require__(0);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _store = __webpack_require__(7);

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

		_this.state = {
			isInvalidInput: false
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
			var isInvalidInput = this.state.isInvalidInput;

			var label = '';
			if (isInvalidInput) {
				label = 'Please enter an item that is at least ' + _store.MIN_CHARACTERS_ALLOWED + ' characters long';
			}
			this.root.innerHTML = '\n<div>\n\t' + label + '\n\t<div class="ui fluid icon input">\n\t    <input type="text" placeholder="Search a very wide input..." value="' + this.value + '" autofocus="true">\n\t    <i class="search icon"></i>\n\t</div> \t\n</div>\t\n\t\t';
		}
	}, {
		key: 'updateValue',
		value: function updateValue(value, keyCode) {
			if (keyCode === 13) {
				if (value.length < _store.MIN_CHARACTERS_ALLOWED) {
					// update state
					this.state.isInvalidInput = true;
					this.render();
				} else {
					this.state.isInvalidInput = false;
					this.dispatcher('CREATE_TODO', {
						newTodoText: value
					});
				} // else
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
/* 4 */
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

var _TodoItem = __webpack_require__(10);

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
        _this.data = {};
        _this.data.todos = todos;

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

            var newComponents = newProps.map(function (todo) {
                return new _TodoItem.TodoItem(todo, _this2.rootClassName, _this2.dispatcher);
            });

            newComponents.forEach(function (todo, i) {
                var _do = todo.data.do;
                _this2.todoItemComponents.forEach(function (oldTodo, j) {
                    if (oldTodo.data.do === _do && oldTodo.state.isEditMode) {
                        todo.state = oldTodo.state;
                        todo.render();
                    }
                });
            });

            this.todoItemComponents = newComponents;

            // this.todoItemComponents = newProps.map((todo, i) => {
            //     const newTodo = new TodoItem(todo, this.rootClassName, this.dispatcher);
            //     const oldTodo = this.todoItemComponents[i] ? this.todoItemComponents[i] : null;

            //     if (oldTodo) {
            //         newTodo.state = Object.assign({},oldTodo.state);
            //         newTodo.render();
            //     }

            //     return newTodo;
            // });
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestComp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ReactLiteLOL = __webpack_require__(9);

var _ReactLiteLOL2 = _interopRequireDefault(_ReactLiteLOL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestComp = exports.TestComp = function (_ReactLite) {
    _inherits(TestComp, _ReactLite);

    function TestComp(props) {
        _classCallCheck(this, TestComp);

        var _this = _possibleConstructorReturn(this, (TestComp.__proto__ || Object.getPrototypeOf(TestComp)).call(this, props));

        _this.state = {
            foo: 1
        };
        return _this;
    }

    _createClass(TestComp, [{
        key: 'updateState',
        value: function updateState() {
            this.setState({
                foo: 2,
                bar: 1
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nP, nS) {
            console.log('---------- componetWillUpdate');
            console.log(nP, nS);
            console.log('---------- componetWillUpdate');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(pP, pS) {
            console.log('---------- componetDidUpdate');
            console.log(pP, pS);
            console.log('---------- componetDidUpdate');
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nP) {
            console.log('---------- componentWillReceiveProps');
            console.log(nP);
            console.log('---------- componentWillReceiveProps');
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('rendering...');
        }
    }]);

    return TestComp;
}(_ReactLiteLOL2.default);

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var MIN_CHARACTERS_ALLOWED = exports.MIN_CHARACTERS_ALLOWED = 3;

var AppData = exports.AppData = {
	todos: [],
	nextTaskIndex: -1,
	numComplete: 0,
	numLeft: 0,
	currentTodoValue: ''
};

/***/ }),
/* 8 */
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
		this.important = false;
		this.index = index;
	}

	// markCompleted() {
	// 	this.complete = true;
	// }

	// unmarkCompleted() {
	// 	this.complete = false;
	// }

	_createClass(ListItem, [{
		key: "toggleComplete",
		value: function toggleComplete() {
			this.complete = !this.complete;
		}
	}, {
		key: "toggleImportant",
		value: function toggleImportant() {
			this.important = !this.important;
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactLite = function () {
    function ReactLite(props) {
        _classCallCheck(this, ReactLite);

        this.props = props;
    }

    _createClass(ReactLite, [{
        key: "setProps",
        value: function setProps(props) {
            var nextProps = Object.assign({}, props);

            this.componentWillReceiveProps(nextProps);

            var shouldUpdate = this.shouldComponentUpdate(nextProps, this.state);
            if (!shouldUpdate) return;

            this.componentWillUpdate(nextProps, this.state);
            this.render();
            this.componentDidUpdate(this.props, this.state);

            this.props = nextProps;
        }
    }, {
        key: "setState",
        value: function setState(state) {
            var nextState = Object.assign({}, this.state, state);

            var shouldUpdate = this.shouldComponentUpdate(this.props, nextState);
            if (!shouldUpdate) return;

            this.componentWillUpdate(this.props, nextState);
            this.render();
            this.componentDidUpdate(this.props, this.state);

            this.state = nextState;
        }
        // stubs

    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {}
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {}
    }]);

    return ReactLite;
}();

exports.default = ReactLite;

/***/ }),
/* 10 */
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

var _store = __webpack_require__(7);

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

        _this.state = {
            isEditMode: false,
            isInvalidInput: false,
            val: ''
        };

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

                if (_this2.isTarget('js-remove', target)) {
                    _this2.dispatcher('DELETE_TODO', {
                        index: _this2.data.index
                    });
                }
                if (_this2.isTarget('js-toggle-complete', target)) {
                    _this2.dispatcher('TOGGLE_COMPLETE', {
                        index: _this2.data.index
                    });
                }
                if (_this2.isTarget('js-toggle-important', target)) {
                    _this2.dispatcher('TOGGLE_IMPORTANT', {
                        index: _this2.data.index
                    });
                }
                if (_this2.isTarget('js-todo-title', target)) {
                    _this2.state.isEditMode = true;
                    _this2.render();
                }
                if (_this2.isTarget('js-todo-title-update', target)) {
                    if (_this2.state.val.length < _store.MIN_CHARACTERS_ALLOWED) {
                        _this2.state.isInvalidInput = true;
                        _this2.render();
                    } else {
                        // lol dispatch
                        _this2.state.val = '';
                    }
                }
            });

            this.root.addEventListener('keyup', function (_ref) {
                var target = _ref.target,
                    keyCode = _ref.keyCode;

                if (_this2.isTarget('js-todo-title-editing', target)) {
                    if (keyCode === 27) {
                        _this2.state.isEditMode = false;
                        _this2.state.isInvalidInput = false;
                        _this2.state.val = '';
                        _this2.render();
                    }
                }
            });

            this.root.addEventListener('change', function (_ref2) {
                var target = _ref2.target,
                    keyCode = _ref2.keyCode;

                if (_this2.isTarget('js-todo-title-editing', target)) {
                    _this2.state.val = target.value;
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
            // const isComplete = this.data.complete ? 'red' : 'green';
            // const isImportant = this.data.important ? 'purple': '';
            var _data = this.data,
                complete = _data.complete,
                important = _data.important;

            var colorClass = '';
            if (complete) {
                colorClass = 'red';
            } else if (important) {
                colorClass = 'purple';
            } else {
                colorClass = 'green';
            }

            var isEditMode = this.state.isEditMode;

            var title = '<h4 style="margin-bottom: 0; width: 100%;" class="js-todo-title">' + this.data.do + '</h4>';
            var close = '<i style="text-align: right; cursor: pointer;" class="icon remove js-remove"></i>';

            if (isEditMode) {
                var isInvalidInput = this.state.isInvalidInput;

                var label = '';
                if (isInvalidInput) {
                    label = 'Please enter an item that is at least ' + _store.MIN_CHARACTERS_ALLOWED + ' characters long';
                }
                title = '\n<div style="width: 100%;">\n    ' + label + '\n    <div class="ui fluid action input js-todo-title-editing" style="width: 100%;">\n      <input type="text" value="' + this.data.do + '">\n      <div class="ui button js-todo-title-update" >Update</div>\n    </div>\n</div>\n            ';
                close = '';
            }

            /* DONT TRY THID AT HOME
            const colorClass = (complete) ? 'red' : 
                                            (important) ? 'purple' : 
                                                          'green';
            */

            this.root.innerHTML = '\n<div class="ui segment ' + colorClass + '">\n    <div style="display: flex; width: 100%;">\n        ' + title + '\n        ' + close + '\n    </div>\n    ' + this.renderImportantButton() + '\n    ' + this.renderCompleteButton() + '\n</div>\n        ';
        }
    }, {
        key: 'renderCompleteButton',
        value: function renderCompleteButton() {
            var complete = this.data.complete;

            var buttonColorClass = complete ? 'red' : 'green';
            var marked = complete ? 'Incomplete' : 'Complete';

            return '\n<div style="text-align: right; margin-top: 10px;">\n    <button class="ui button ' + buttonColorClass + ' mini js-toggle-complete">Mark ' + marked + '</button>\n</div>\n        ';
        }
    }, {
        key: 'renderImportantButton',
        value: function renderImportantButton() {
            var important = this.data.important;

            var buttonColorClass = important ? 'purple' : '';
            var marked = important ? 'Unimportant' : 'important';

            return '\n<div style="text-align: right; margin-top: 10px;">\n    <button class="ui button ' + buttonColorClass + ' mini js-toggle-important">Mark ' + marked + '</button>\n</div>\n        ';
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(6);

var _store = __webpack_require__(7);

var _actions = __webpack_require__(1);

var _TodoInput = __webpack_require__(3);

var _TodoList = __webpack_require__(4);

var _BetterCounter = __webpack_require__(2);

var _testComp = __webpack_require__(5);

/* COMPONENTS */
document.querySelector('#app').innerHTML = ""; /* FLUX REQUIREMENTS */


var myApplicationDispatch = (0, _dispatcher.dispatcher)(_store.AppData, _actions.actions, function (store) {
	t.refreshProps(store.currentTodoValue);
	count.refreshProps({
		numLeft: store.numLeft,
		numComplete: store.numComplete
	});
	list.refreshProps(store.todos);
});

var t = (0, _TodoInput.todoInput)(_store.AppData.currentTodoValue, '#app', myApplicationDispatch);
var count = (0, _BetterCounter.betterCounter)({
	numLeft: _store.AppData.numLeft,
	numComplete: _store.AppData.numComplete
}, '#app');
var list = (0, _TodoList.todoList)(_store.AppData.todos, '#app', myApplicationDispatch);
/*
const k = new TestComp();
k.updateState();
k.setProps();
*/

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggleImportant = exports.toggleComplete = exports.deleteTodo = exports.createNewTodo = undefined;

var _ListItem = __webpack_require__(8);

var computeNumLeftAndComplete = function computeNumLeftAndComplete(todos) {

	var numComplete = 0;
	for (var i = 0; i < todos.length; i++) {
		var currentTodo = todos[i];
		if (currentTodo.complete) {
			numComplete++;
		}
	}

	var numLeft = todos.length - numComplete;

	return { numLeft: numLeft, numComplete: numComplete };
};

var createNewTodo = exports.createNewTodo = function createNewTodo(oldStore, props) {

	// ... update the old store

	var newTodoText = props.newTodoText;
	var todos = oldStore.todos;

	var _computeNumLeftAndCom = computeNumLeftAndComplete(todos),
	    numLeft = _computeNumLeftAndCom.numLeft,
	    numComplete = _computeNumLeftAndCom.numComplete;

	// ... create new store


	var newStore = Object.assign({}, oldStore, {
		todos: todos.concat((0, _ListItem.listItem)(newTodoText, todos.length)),
		currentTodoValue: '',
		numLeft: numLeft + 1,
		numComplete: numComplete
	});

	// ... return new data
	return newStore;
};

var deleteTodo = exports.deleteTodo = function deleteTodo(oldStore, props) {
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

	var _computeNumLeftAndCom2 = computeNumLeftAndComplete(todos),
	    numLeft = _computeNumLeftAndCom2.numLeft,
	    numComplete = _computeNumLeftAndCom2.numComplete;
	// const deletedItem = todos[oldIndex];

	// if (deletedItem.complete) {
	// 	numComplete--;
	// }
	// else {
	// 	numLeft--;
	// }

	var newStore = Object.assign({}, oldStore, {
		todos: newTodos,
		numComplete: todos[oldIndex].complete ? numComplete - 1 : numComplete,
		numLeft: !todos[oldIndex].complete ? numLeft - 1 : numLeft
	});

	// ... compute the numLeft / numComplete methods
	// const {numLeft, numComplete} = computeNumLeftAndComplete(newTodos);
	// ... create new store
	// const newStore = Object.assign({}, oldStore, {
	// 	todos: newTodos,
	//	numComplete,
	//  numLeft,
	// });

	/*
 const newStore = Object.assign(
 	{}, 									// initial object to add into
 	oldStore, 								// the OLD list of properties
 	{										// the ONE property we want to update
 		todos: newTodos,
 	}, 
 	computeNumLeftAndComplete(newTodos)		// the numLeft and numComplete properties
 );
 */

	return newStore;
};

var toggleComplete = exports.toggleComplete = function toggleComplete(oldStore, props) {
	var todos = oldStore.todos;
	var oldIndex = props.index;

	// ALSO VALID:
	// const todoItemToComplete = todos[oldIndex];
	// todoItemToComplete.markCompleted();

	todos[oldIndex].toggleComplete();

	var complete = [];
	var incomplete = [];
	for (var i = 0; i < todos.length; i++) {
		var currentTodo = todos[i];
		var isComplete = currentTodo.complete;
		if (isComplete) {
			complete.push(currentTodo);
		} else {
			incomplete.push(currentTodo);
		}
	}

	var newTodos = incomplete.concat(complete).map(function (todo, i) {
		todo.index = i;
		return todo;
	});

	// ... create new store
	var newStore = Object.assign({}, oldStore, {
		todos: newTodos,
		numComplete: complete.length,
		numLeft: incomplete.length
	});
	return newStore;
};

var toggleImportant = exports.toggleImportant = function toggleImportant(oldStore, props) {
	var todos = oldStore.todos;
	var oldIndex = props.index;

	// ALSO VALID:
	// const todoItemToComplete = todos[oldIndex];
	// todoItemToComplete.markCompleted();

	todos[oldIndex].toggleImportant();

	var complete = todos.filter(function (current) {
		return current.complete;
	});
	var important = todos.filter(function (current) {
		return current.important && !current.complete;
	});
	var incomplete = todos.filter(function (current) {
		return !current.complete && !current.important;
	});

	var newTodos = important.concat(incomplete, complete).map(function (todo, i) {
		todo.index = i;
		return todo;
	});

	// const complete = [];
	// const incomplete = [];
	// for (let i = 0; i < todos.length; i++) {
	// 	const currentTodo = todos[i];
	// 	const isComplete = currentTodo.complete;
	// 	if (isComplete) {
	// 		complete.push(currentTodo);
	// 	}
	// 	else {
	// 		incomplete.push(currentTodo);
	// 	}
	// }

	// const newTodos = incomplete.concat(complete).map((todo, i) => {
	// 	todo.index = i;
	// 	return todo;
	// })

	// ... create new store
	var newStore = Object.assign({}, oldStore, {
		todos: newTodos,
		numComplete: complete.length,
		numLeft: incomplete.length
	});
	return newStore;
};

// export const markCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].markCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;
// }

// export const unmarkCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].unmarkCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;	
// }

/***/ })
/******/ ]);