import BaseComponent from './BaseComponent';
import {MIN_CHARACTERS_ALLOWED} from '../store';

class TodoInput extends BaseComponent {
	constructor(currentTodoValue, container, dispatcher) {
		super(container);

        this.dispatcher = dispatcher || (() => null);


		this.state = {
            isInvalidInput: false,
        };

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
		const {isInvalidInput} = this.state;
		let label = '';
		if (isInvalidInput) {
			label = `Please enter an item that is at least ${MIN_CHARACTERS_ALLOWED} characters long`
		}
		this.root.innerHTML = `
<div>
	${label}
	<div class="ui fluid icon input">
	    <input type="text" placeholder="Search a very wide input..." value="${this.value}" autofocus="true">
	    <i class="search icon"></i>
	</div> 	
</div>	
		`
	}
	updateValue(value, keyCode) {
		if (keyCode === 13) {
			if (value.length < MIN_CHARACTERS_ALLOWED) {
				// update state
				this.state.isInvalidInput = true;
				this.render();
			}
			else {
				this.state.isInvalidInput = false;
				this.dispatcher('CREATE_TODO', {
		            newTodoText: value, 
		        });
			} // else
		}
	}
}

export function todoInput(...args) {
	return new TodoInput(...args);
}
