/* FLUX REQUIREMENTS */
import {dispatcher} from './dispatcher';
import {AppData as Store} from './store';
import {actions} from './actions';

/* COMPONENTS */
import {todoInput} from './components/TodoInput';
import {todoList} from './components/TodoList';



document.querySelector('#app').innerHTML = "";

const myApplicationDispatch = dispatcher(Store, actions, store => {
	t.refreshProps(store.currentTodoValue)
    list.refreshProps(store.todos);
});

const t = todoInput(Store.currentTodoValue, '#app', myApplicationDispatch);
const list = todoList(Store.todos, '#app', myApplicationDispatch);
