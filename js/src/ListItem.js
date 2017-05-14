export class ListItem {
	constructor(todoItem, index) {
		this.do = todoItem;
		this.complete = false;
		this.index = index;
	}

	markCompleted() {
		this.complete = true;
	}
}

export function listItem(...args) {
	return new ListItem(...args);
}
