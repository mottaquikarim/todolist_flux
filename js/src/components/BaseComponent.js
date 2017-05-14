const getSuperRandomNum = () => Date.now() * Math.floor(Math.random()*10);

export default class BaseComponent {
	constructor(container) {
		const root = document.createElement('div');
        const className = `js-input-${getSuperRandomNum()}`;
		root.classList.add(className);
		document.querySelector(container).appendChild(root);

		this.root = root;
        this.rootClassName = `.${className}`;
	}
}
