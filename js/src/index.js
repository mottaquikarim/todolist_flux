// const todos = []; they will be ListItems
import {todoInput} from './components/TodoInput';

import {listItem} from './ListItem';

let AppData = {
	todos: [],
	nextTaskIndex: -1,
	numCompleted: 0,
	numLeft: 0,
	currentTodoValue: 'LOL',
};

const createNewTodo = (oldStore, props) => {

	// ... update the old store

	const {newTodoText} = props;
	const {todos} = oldStore;

	// ... create new store
	const newStore = Object.assign({}, oldStore, {
		todos: todos.concat(listItem(newTodoText))
	});

	// ... return new data
	return newStore;
}


const actions = {
	"CREATE_TODO": (oldStore, additionalProps) => createNewTodo(oldStore, additionalProps),
	"MARK_COMPLETED": () => {},
	// "DELETE_TODO": () => {

	// },
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
}

const dispatcher = (store, render) => {
	return (actionName, props) => {
		store = actions[actionName](store, props);
		render(store);
	}; // what to return
}; // dispatcher

function appRender(store) {
	todoInput.render(store.currentTodoValue);
	todoList(store.todos)
}
const myApplicationDispatch = dispatcher(AppData, appRender);
todoInput(AppData.currentTodoValue, '#app');

myApplicationDispatch('CREATE_TODO', {
	newTodoText: 'wake up'
});
myApplicationDispatch('CREATE_TODO', {
	newTodoText: 'drank'
});




