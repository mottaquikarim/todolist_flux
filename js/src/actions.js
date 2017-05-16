import {
	createNewTodo,
	deleteTodo,
	markCompleted,
} from './reducers';

export const actions = {
	"CREATE_TODO": (...args) => createNewTodo(...args),
	"DELETE_TODO": (oldStore, additionalProps) => {
		return deleteTodo(oldStore, additionalProps);
	},
	"MARK_COMPLETED": (oldStore, additionalProps) => {
		return markCompleted(oldStore, additionalProps)
	}
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
}