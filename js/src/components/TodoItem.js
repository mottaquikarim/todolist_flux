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
            if (target.classList.contains('js-toggle-complete') || target.closest('.js-toggle-complete')) {
                this.dispatcher('TOGGLE_COMPLETE', {
                    index: this.data.index,
                });        
            }            
            // if (target.classList.contains('js-mark-complete') || target.closest('.js-mark-complete')) {
            //     this.dispatcher('MARK_COMPLETED', {
            //         index: this.data.index,
            //     });        
            // }
            // if (target.classList.contains('js-mark-incomplete') || target.closest('.js-mark-incomplete')) {
            //     this.dispatcher('UNMARK_COMPLETED', {
            //         index: this.data.index,
            //     });        
            // }
        });
    }
    refreshProps(newProps) {
        this.data = newProps;
        this.render();
    }
    render() {
        const isComplete = this.data.complete ? 'red' : 'green';
        
		this.root.innerHTML = `
<div class="ui segment ${isComplete}">
    <div style="display: flex; width: 100%;">
        <h4 style="margin-bottom: 0;">${this.data.do}</h4>
        <i style="text-align: right; width: 100%; cursor: pointer;" class="icon remove js-remove"></i>
    </div>
    ${this.renderCompleteButton()}
</div>
        `;
    }
    renderCompleteButton() {
        const {complete} = this.data;
        const buttonColorClass = complete ? 'red' : 'green';
        const marked = complete ? 'Incomplete' : 'Complete';

        console.log(complete)

        return `
<div style="text-align: right; margin-top: 10px;">
    <button class="ui button ${buttonColorClass} mini js-toggle-complete">Mark ${marked}</button>
</div>
        `;
    }
}

export function todoItem(...args) {
    return new TodoItem(...args);
}
