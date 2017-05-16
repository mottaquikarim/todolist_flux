import BaseComponent from './BaseComponent';

export class TodoItem extends BaseComponent {
    constructor(ListItem, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.data = ListItem;
        console.log(this.data)

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
            if (target.classList.contains('js-mark-completed') || target.closest('.js-mark-completed')) {
                this.dispatcher('MARK_COMPLETED', {
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
        const hideButton = this.data.complete ? 'display: none;' : '';
		this.root.innerHTML = `
<div class="ui segment ${isComplete}">
    <div style="display: flex; width: 100%;">
        <h4 style="margin-bottom: 0;">${this.data.do}</h4>
        <i style="text-align: right; width: 100%; cursor: pointer;" class="icon remove js-remove"></i>
    </div>
    <div style="text-align: right; margin-top: 10px; ${hideButton}">
        <button class="ui button green mini js-mark-completed">Mark Completed</button>
    </div>
</div>
        `;
    }
}

export function todoItem(...args) {
    return new TodoItem(...args);
}
