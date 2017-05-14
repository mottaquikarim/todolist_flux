import BaseComponent from './BaseComponent';

export class TodoItem extends BaseComponent {
    constructor(ListItem, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.data = ListItem;

        this.initEvents();
		this.render();
    }
    initEvents() {
        this.root.addEventListener('click', (e) => {
            const {target, keyCode} = e;
            if (target.classList.contains('js-remove') || target.closest('.js-remove')) {
                this.dispatcher('DELETE_TODO', {
                    index: this.data.index,
                });
            }
        });
    }
    refreshProps(newProps) {
        this.data = newProps;
        this.render();
    }
    render() {
        const isComplete = this.data.complete ? 'green' : '';
		this.root.innerHTML = `
<div class="ui segment ${isComplete}" style="display: flex;">
    <h4 style="margin-bottom: 0;">${this.data.do}</h4>
    <i style="text-align: right; width: 100%; cursor: pointer;" class="icon remove js-remove"></i>
</div>
        `;
    }
}

export function todoItem(...args) {
    return new TodoItem(...args);
}
