import { createSelector } from "@ngrx/store";
import { Todo } from "../../../interface/todo.interface";

interface TodoState {
    todos: Todo[];
}

interface AppState {
    todos: TodoState;
}

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
    selectTodosFeature,
   (state: TodoState) => state.todos
)