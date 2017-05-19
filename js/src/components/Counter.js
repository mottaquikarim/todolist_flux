import BaseComponent from './BaseComponent';

export class Counter extends BaseComponent {
	constructor(count, container) {
		super(container);

		this.count = count;
		this.render();
	}
	refreshProps(newProp) {
		this.count = newProp;
		this.render();
	}
	render() {
		const {count} = this
		this.root.innerHTML = `
<div>
	${count}
</div>
		`;
	}
}

// export function counter(...args) {
// 	return new Counter(...args);
// }

export const counter = (...args) => new Counter(...args);
