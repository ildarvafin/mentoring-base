import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../../../interface/todo.interface";

export const  TodoActions = createActionGroup({
    source: 'Todos',
    events: {
        'set': props<{todos: Todo[]}>(),

        'edit': props<{todo:Todo}>(),

        'create': props<{todo: Todo }>(),

        'delete': props<{id: number }>()
    }
})