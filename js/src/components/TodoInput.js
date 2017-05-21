import BaseComponent from './BaseComponent';

class TodoInput extends BaseComponent {
	constructor(currentTodoValue, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher || (() => null);

		this.value = currentTodoValue;
		this.initEvents();
		this.render();
    }
    initEvents() {
		this.root.addEventListener('keydown', (e) => {
			const {target, keyCode} = e;
			if (target.classList.contains('input') || target.closest('input')) {
				this.updateValue(target.value, keyCode);
			}
			
			
		});
	}
    refreshProps(newObj) {
		this.value = newObj;
        this.render();
    }
	render() {
		this.root.innerHTML = `
<div class="ui fluid icon input">
    <input type="text" placeholder="Search a very wide input..." value="${this.value}" autofocus="true">
    <i class="search icon"></i>
</div> 		
		`
	}
	updateValue(value, keyCode) {
		if (keyCode === 13) {
            this.dispatcher('CREATE_TODO', {
                newTodoText: value, 
            });
		}
	}
}

export function todoInput(...args) {
	return new TodoInput(...args);
}
