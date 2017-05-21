import {listItem} from './ListItem';

const computeNumLeftAndComplete = (todos) => {
	
	let numComplete = 0;
	for (let i = 0; i < todos.length; i++) {
		const currentTodo = todos[i];
		if (currentTodo.complete) {
			numComplete++;
		}
	}

	const numLeft = todos.length - numComplete;

	return {numLeft, numComplete};
}

export const createNewTodo = (oldStore, props) => {

	// ... update the old store

	const {newTodoText} = props;
	const {todos} = oldStore;
	const {numLeft, numComplete} = computeNumLeftAndComplete(todos);

	// ... create new store
	const newStore = Object.assign({}, oldStore, {
		todos: todos.concat(listItem(newTodoText, todos.length)),
        currentTodoValue: '',
        numLeft: numLeft + 1,
        numComplete,
	});
	

	// ... return new data
	return newStore;
}

export const deleteTodo = (oldStore, props) => {
	const {todos} = oldStore;
	const {index: oldIndex} = props;
	

	const newTodos = [];
	let i = 0;
	for (const oldTodo of todos) {
		if (oldTodo.index === oldIndex) {
			continue;
		}

		oldTodo.index = i;
		newTodos.push(oldTodo);
		i++;
	}

	const {numLeft, numComplete} = computeNumLeftAndComplete(todos);
	// const deletedItem = todos[oldIndex];

	// if (deletedItem.complete) {
	// 	numComplete--;
	// }
	// else {
	// 	numLeft--;
	// }

	const newStore = Object.assign({}, oldStore, {
		todos: newTodos,
		numComplete: todos[oldIndex].complete ? numComplete - 1 : numComplete,
 	 	numLeft: !todos[oldIndex].complete ? numLeft - 1 : numLeft,
	});

	// ... compute the numLeft / numComplete methods
	// const {numLeft, numComplete} = computeNumLeftAndComplete(newTodos);
	// ... create new store
	// const newStore = Object.assign({}, oldStore, {
	// 	todos: newTodos,
	//	numComplete,
 	//  numLeft,
	// });

	/*
	const newStore = Object.assign(
		{}, 									// initial object to add into
		oldStore, 								// the OLD list of properties
		{										// the ONE property we want to update
			todos: newTodos,
		}, 
		computeNumLeftAndComplete(newTodos)		// the numLeft and numComplete properties
	);
	*/
	
	return newStore;
}

export const toggleComplete = (oldStore, props) => {
		
		const {todos} = oldStore;
		const {index: oldIndex} = props;

		// ALSO VALID:
		// const todoItemToComplete = todos[oldIndex];
		// todoItemToComplete.markCompleted();

		todos[oldIndex].toggleComplete();

		const complete = [];
		const incomplete = [];
		for (let i = 0; i < todos.length; i++) {
			const currentTodo = todos[i];
			const isComplete = currentTodo.complete;
			if (isComplete) {
				complete.push(currentTodo);
			}
			else {
				incomplete.push(currentTodo);
			}
		}

		const newTodos = incomplete.concat(complete).map((todo, i) => {
			todo.index = i;
			return todo;
		})

		// ... create new store
		const newStore = Object.assign({}, oldStore, {
			todos: newTodos,
			numComplete: complete.length,
			numLeft: incomplete.length,
		});
		return newStore;	
}

export const toggleImportant = (oldStore, props) => {
		const {todos} = oldStore;
		const {index: oldIndex} = props;

		// ALSO VALID:
		// const todoItemToComplete = todos[oldIndex];
		// todoItemToComplete.markCompleted();

		todos[oldIndex].toggleImportant();

		const complete = todos.filter(current => current.complete);
		const important = todos.filter(current => current.important && !current.complete);
		const incomplete = todos.filter(current => !current.complete && !current.important);

		const newTodos = important.concat(incomplete, complete).map((todo, i) => {
			todo.index = i;
			return todo;
		});

		// const complete = [];
		// const incomplete = [];
		// for (let i = 0; i < todos.length; i++) {
		// 	const currentTodo = todos[i];
		// 	const isComplete = currentTodo.complete;
		// 	if (isComplete) {
		// 		complete.push(currentTodo);
		// 	}
		// 	else {
		// 		incomplete.push(currentTodo);
		// 	}
		// }

		// const newTodos = incomplete.concat(complete).map((todo, i) => {
		// 	todo.index = i;
		// 	return todo;
		// })

		// ... create new store
		const newStore = Object.assign({}, oldStore, {
			todos: newTodos,
			numComplete: complete.length,
			numLeft: incomplete.length,
		});
		return newStore;		
}

// export const markCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].markCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;
// }

// export const unmarkCompleted = (oldStore, props) => {
// 	console.log('LOL in markCompleted tho')
// 	const {todos} = oldStore;
// 	const {index: oldIndex} = props;

// 	// ALSO VALID:
// 	// const todoItemToComplete = todos[oldIndex];
// 	// todoItemToComplete.markCompleted();

// 	todos[oldIndex].unmarkCompleted();

// 	// ... create new store
// 	const newStore = Object.assign({}, oldStore, {
// 		todos: todos.slice(0),
// 	});
// 	return newStore;	
// }










