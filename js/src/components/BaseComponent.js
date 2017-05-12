const getSuperRandomNum = () => Date.now() * Math.floor(Math.random()*10);

export default class BaseComponent {
	constructor(container) {
		const root = document.createElement('div');
		root.classList.add(`js-input-${getSuperRandomNum()}`);
		document.querySelector(container).appendChild(root);

		this.root = root;
	}
}