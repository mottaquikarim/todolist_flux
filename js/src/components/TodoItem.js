import BaseComponent from './BaseComponent';

export class TodoItem extends BaseComponent {
    constructor(ListItem, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.data = ListItem;

		this.render();
    }
    refreshProps(newProps) {
        this.data = newProps;
        this.render();
    }
    render() {
        const isComplete = this.data.complete ? 'green' : '';
		this.root.innerHTML = `
<div class="ui segment ${isComplete}">
    <h4>${this.data.do}</h4>
</div>
        `;
    }
}

export function todoItem(...args) {
    return new TodoItem(...args);
}
