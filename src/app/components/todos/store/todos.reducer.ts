import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../../interface/todo.interface";
import { TodoActions } from "./todos.actions";

const initialState:  { todos: Todo[] } = {
    todos: []
}

export const todoReduser = createReducer(
    initialState,
    on(TodoActions.set, (state, payload) => ({
        ...state,
        todos: payload.todos,
    })),
    on(TodoActions.edit, (state, payload) => ({
        ...state,
      todos: state.todos.map((todo) => {
            if(todo.id === payload.todo.id) {
                return payload.todo;
            } else {
                return todo;
            }
        })
    })),
    on(TodoActions.create, (state, payload) => ({
        ...state,
        todos: [...state.todos, payload.todo]
    })),
    on(TodoActions.delete, (state, payload) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id)
    }))
);