// const todos = []; they will be ListItems
import {todoInput} from './components/TodoInput';
const AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: 'LOL',
};


todoInput(AppData.currentTodoValue, '#app');