import BaseComponent from './BaseComponent';

export class TodoItem extends BaseComponent {
    constructor(ListItem, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher;
        this.data = ListItem;

        this.state = {
            isEditMode: false,
        }        

        this.initEvents();
		this.render();
    }
    initEvents() {
        this.root.addEventListener('click', (e) => {
            const {target, keyCode} = e;
            if (this.isTarget('js-remove',target)) {
                this.dispatcher('DELETE_TODO', {
                    index: this.data.index,
                });
            }
            if (this.isTarget('js-toggle-complete',target)) {
                this.dispatcher('TOGGLE_COMPLETE', {
                    index: this.data.index,
                });        
            }   
            if (this.isTarget('js-toggle-important',target)) {
                this.dispatcher('TOGGLE_IMPORTANT', {
                    index: this.data.index,
                });        
            }
            if (this.isTarget('js-todo-title',target)) {
                this.state.isEditMode = true;
                this.render();
            }          
        });

        this.root.addEventListener('keyup', ({target, keyCode}) => {
            if (this.isTarget('js-todo-title-editing', target)) {
                if (keyCode === 27) {
                    this.state.isEditMode = false;
                    this.render();
                }
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

        const {isEditMode} = this.state;
        let title = `<h4 style="margin-bottom: 0; width: 100%;" class="js-todo-title">${this.data.do}</h4>`;
        let close = `<i style="text-align: right; cursor: pointer;" class="icon remove js-remove"></i>`;

        if (isEditMode) {
            title = `
<div class="ui fluid action input js-todo-title-editing" style="width: 100%;">
  <input type="text" value="${this.data.do}">
  <div class="ui button">Update</div>
</div>
            `;
            close = '';
        }

        /* DONT TRY THID AT HOME
        const colorClass = (complete) ? 'red' : 
                                        (important) ? 'purple' : 
                                                      'green';
        */

		this.root.innerHTML = `
<div class="ui segment ${colorClass}">
    <div style="display: flex; width: 100%;">
        ${title}
        ${close}
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
