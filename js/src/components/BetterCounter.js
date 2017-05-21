import BaseComponent from './BaseComponent';

export class BetterCounter extends BaseComponent {
	constructor(props, container) {
		super(container);

		const {numLeft, numComplete} = props;
		this.numLeft = numLeft;
		this.numComplete = numComplete;

		this.render();
	}
	refreshProps(newProps) {
		const {numLeft, numComplete} = newProps;
		this.numLeft = numLeft;
		this.numComplete = numComplete;
		
		this.render();
	}
	render() {
		const {numLeft, numComplete} = this
		this.root.innerHTML = `
<div>
	numLeft: ${numLeft} / numComplete: ${numComplete}
</div>
		`;
	}
}

// export function counter(...args) {
// 	return new Counter(...args);
// }

export const betterCounter = (...args) => new BetterCounter(...args);
