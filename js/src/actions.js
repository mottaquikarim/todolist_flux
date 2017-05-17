import {
	createNewTodo,
	deleteTodo,
	toggleComplete,
	// markCompleted,
	// unmarkCompleted,
} from './reducers';

export const actions = {
	"CREATE_TODO": (...args) => createNewTodo(...args),
	"DELETE_TODO": (oldStore, additionalProps) => {
		return deleteTodo(oldStore, additionalProps);
	},
	"TOGGLE_COMPLETE": (...args) => toggleComplete(...args),
	// "MARK_COMPLETED": (oldStore, additionalProps) => {
	// 	return markCompleted(oldStore, additionalProps)
	// },
	// "UNMARK_COMPLETED": (oldStore, additionalProps) => {
	// 	return unmarkCompleted(oldStore, additionalProps)
	// },
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
}