
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { Todo } from '../../../interface/todo.interface';
import { TruncatePipe } from '../../../pipes/value-limitation';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatDialogModule, TruncatePipe ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  public todo!: Todo

  @Output()
  public deleteTodo = new EventEmitter();

  @Output()
  public editTodo = new EventEmitter();

   public readonly dialog = inject(MatDialog);

   private snackBar = inject(MatSnackBar);

   public openDeleteDialog(): void {
      const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
        data: {todo:this.todo},
      });
  
      dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
        if (result) {
          this.deleteTodo.emit(this.todo.id)
          this.snackBar.open('Пользователь удален', 'Ok', {
            duration: 3000
          });
        
          console.log('Пользователь удален',this.todo.id)
        }
    
        console.log(result)
      });
    }

  public openDialog(): void {
      const dialogRef = this.dialog.open(EditTodoDialogComponent, {
        data: {todo:this.todo},
      });
      dialogRef.afterClosed().subscribe(editResult => {
        console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
        if (editResult) {
          this.editTodo.emit(editResult);
          this.snackBar.open('Пользователь отредактирован', 'Ok', {
           duration: 3000
         });
        }
      });
    }
}
