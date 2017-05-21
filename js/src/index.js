/* FLUX REQUIREMENTS */
import {dispatcher} from './dispatcher';
import {AppData as Store} from './store';
import {actions} from './actions';

/* COMPONENTS */
import {todoInput} from './components/TodoInput';
import {todoList} from './components/TodoList';
import {betterCounter} from './components/BetterCounter';
import {TestComp} from './components/testComp';


document.querySelector('#app').innerHTML = "";

const myApplicationDispatch = dispatcher(Store, actions, store => {
	t.refreshProps(store.currentTodoValue)
	count.refreshProps({
		numLeft: store.numLeft,
		numComplete: store.numComplete,
	})
    list.refreshProps(store.todos);
});

const t = todoInput(Store.currentTodoValue, '#app', myApplicationDispatch);
const count = betterCounter({
	numLeft: Store.numLeft,
	numComplete: Store.numComplete
}, '#app');
const list = todoList(Store.todos, '#app', myApplicationDispatch);
/*
const k = new TestComp();
k.updateState();
*/
