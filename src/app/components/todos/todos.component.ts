import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../../todos-api.service';
import { TodosService } from '../../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface createTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todosService.setTodos(response);
      }
    )
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id); 
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

