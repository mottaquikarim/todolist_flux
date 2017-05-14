import {
	createNewTodo,
	deleteTodo,
} from './reducers';

export const actions = {
	"CREATE_TODO": (oldStore, additionalProps) => {
		return createNewTodo(oldStore, additionalProps);
	},
	"DELETE_TODO": (oldStore, additionalProps) => {
		return deleteTodo(oldStore, additionalProps);
	},
	// "UPDATE_TODO": () => {

	// },

	// "REMINDER_TODO": () => {

	// }
}