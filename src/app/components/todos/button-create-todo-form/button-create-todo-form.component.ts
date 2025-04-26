import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-create-todo-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './button-create-todo-form.component.html',
  styleUrl: './button-create-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCreateTodoFormComponent {

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  
  @Output()
  public createTodo = new EventEmitter();

  public openDialog(): void {
    const dialogRef: MatDialogRef<CreateTodoFormComponent> = this.dialog.open(CreateTodoFormComponent);
    dialogRef.afterClosed().subscribe(editResult => {
      if (editResult) {
        this.createTodo.emit(editResult)
        this.snackBar.open('Пользователь добавлен', 'Ok', {
          duration: 3000
        });
      }
    });
  }
}
