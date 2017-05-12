export class ListItem {
	constructor(todoItem) {
		this.do = todoItem;
		this.complete = false;
	}

	markCompleted() {
		this.complete = true;
	}
}

export function listItem(...args) {
	return new ListItem(...args);
}