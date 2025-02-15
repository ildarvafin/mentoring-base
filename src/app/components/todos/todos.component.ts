import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../../todos-api.service';
// import { TodosService } from '../../todos.service';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCreateTodoFormComponent } from './button-create-todo-form/button-create-todo-form.component';
import { createTodo, Todo } from '../../interface/todo.interface';
import { Store } from '@ngrx/store';
import { TodoActions } from './store/todos.actions';
import { selectTodos } from './store/todos.selectors';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, MatIconModule, ButtonCreateTodoFormComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

  private readonly todosApiService = inject(TodosApiService);

  private readonly store = inject(Store);

  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.store.dispatch(TodoActions.set({ todos: response.slice(0, 8)}));
      }
       
    )
  }

  public deleteTodo(id: number) {
    this.store.dispatch(TodoActions.delete({ id }));
  }

  public editTodo(todo: Todo) {
    this.store.dispatch(TodoActions.edit({ todo }));
}

  public createTodo(formData: createTodo) {
    this.store.dispatch(TodoActions.create({
      todo: {
        id: new Date().getTime(),
        title: formData. title,
        userId: formData.  userId,
        completed: formData.  completed,
    }}));
  }

}

