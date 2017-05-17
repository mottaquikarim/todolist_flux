export class ListItem {
	constructor(todoItem, index) {
		this.do = todoItem;
		this.complete = false;
		this.index = index;
	}

	// markCompleted() {
	// 	this.complete = true;
	// }

	// unmarkCompleted() {
	// 	this.complete = false;
	// }

	toggleComplete() {
		this.complete = !this.complete;
	}
}

export function listItem(...args) {
	return new ListItem(...args);
}
