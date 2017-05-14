import BaseComponent from './BaseComponent';
import {TodoItem} from './TodoItem';
console.log(TodoItem);
export class TodoList extends BaseComponent {
    constructor(todos, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.container = container;
        this.todoItemComponents = todos.map(
            todo => new TodoItem(todo, this.rootClassName, this.dispatcher)
        );
    }
    refreshProps(newProps) {
        this.root.innerHTML = '';

        this.todoItemComponents = newProps.map(
            todo => new TodoItem(todo, this.rootClassName, this.dispatcher)
        );
    }
}

export function todoList(...args) {
    return new TodoList(...args);
}
