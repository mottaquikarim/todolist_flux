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
            if (target.classList.contains('js-toggle-complete') || target.closest('.js-toggle-complete')) {
                this.dispatcher('TOGGLE_COMPLETE', {
                    index: this.data.index,
                });        
            }   
            if (target.classList.contains('js-toggle-important') || target.closest('.js-toggle-important')) {
                this.dispatcher('TOGGLE_IMPORTANT', {
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
        // const isComplete = this.data.complete ? 'red' : 'green';
        // const isImportant = this.data.important ? 'purple': '';
        const {complete, important} = this.data;
        let colorClass = '';
        if (complete) {
            colorClass = 'red';
        }
        else if (important) {
            colorClass = 'purple';
        }
        else {
            colorClass = 'green'
        }

        /* DONT TRY THID AT HOME
        const colorClass = (complete) ? 'red' : 
                                        (important) ? 'purple' : 
                                                      'green';
        */

		this.root.innerHTML = `
<div class="ui segment ${colorClass}">
    <div style="display: flex; width: 100%;">
        <h4 style="margin-bottom: 0;">${this.data.do}</h4>
        <i style="text-align: right; width: 100%; cursor: pointer;" class="icon remove js-remove"></i>
    </div>
    ${this.renderImportantButton()}
    ${this.renderCompleteButton()}
</div>
        `;
    }
    renderCompleteButton() {
        const {complete} = this.data;
        const buttonColorClass = complete ? 'red' : 'green';
        const marked = complete ? 'Incomplete' : 'Complete';

        

        return `
<div style="text-align: right; margin-top: 10px;">
    <button class="ui button ${buttonColorClass} mini js-toggle-complete">Mark ${marked}</button>
</div>
        `;
    }
    renderImportantButton() {
        const {important} = this.data;
        const buttonColorClass = important ? 'purple' : '';
        const marked = important ? 'Unimportant' : 'important'; 

        return `
<div style="text-align: right; margin-top: 10px;">
    <button class="ui button ${buttonColorClass} mini js-toggle-important">Mark ${marked}</button>
</div>
        `;  
    }
}

export function todoItem(...args) {
    return new TodoItem(...args);
}
