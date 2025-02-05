import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../../todos-api.service';
import { TodosService } from '../../todos.service';
import { MatIconModule } from '@angular/material/icon';
import { ButtonCreateTodoFormComponent } from './button-create-todo-form/button-create-todo-form.component';
import { createTodo, Todo } from '../../interface/todo.interface';


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

  public readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todosService.setTodos(response);
      }
    )
  }

  public deleteTodo(id: number) {
    this.todosService.deleteTodo(id); 
  }

  public editTodo(todo: Todo) {
    this.todosService.editTodo(todo);
}

  public createTodo(formData: createTodo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formData. title,
      userId: formData.  userId,
      completed: formData.  completed,
    });
  }

}

