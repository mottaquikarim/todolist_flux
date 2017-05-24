import BaseComponent from './BaseComponent';
import {TodoItem} from './TodoItem';
console.log(TodoItem);
export class TodoList extends BaseComponent {
    constructor(todos, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.container = container;
        this.data = {};
        this.data.todos = todos;

        this.todoItemComponents = todos.map(
            todo => new TodoItem(todo, this.rootClassName, this.dispatcher)
        );
    }
    refreshProps(newProps) {
        this.root.innerHTML = '';

        const newComponents = newProps.map(
            todo => new TodoItem(todo, this.rootClassName, this.dispatcher)
        );

        newComponents.forEach((todo, i) => {
            const _do = todo.data.do;
            this.todoItemComponents.forEach((oldTodo, j) => {
                if (oldTodo.data.do === _do && oldTodo.state.isEditMode) {
                    todo.state = oldTodo.state;
                    todo.render();
                }
            })
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
}

export function todoList(...args) {
    return new TodoList(...args);
}
