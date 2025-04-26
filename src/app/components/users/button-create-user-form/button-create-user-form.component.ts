import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
<<<<<<< HEAD
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
=======
import { MatDialog } from '@angular/material/dialog';
>>>>>>> 8846d83ef7da46eff1b5d40694beb9d15538fc51
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightDirective } from '../../../directives/highlight.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-button-create-user-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, HighlightDirective, MatTooltipModule],
  templateUrl: './button-create-user-form.component.html',
  styleUrl: './button-create-user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCreateUserFormComponent {

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  @Output()
  public createUser = new EventEmitter();

  public openDialog(): void {
    const dialogRef: MatDialogRef<CreateUserFormComponent> = this.dialog.open(CreateUserFormComponent);
    dialogRef.afterClosed().subscribe(editResult => {
      if (editResult) {
        this.createUser.emit(editResult)
        this.snackBar.open('Пользователь добавлен', 'Ok', {
          duration: 3000
        });
      }
    });
  }

}
