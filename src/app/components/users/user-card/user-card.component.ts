import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
<<<<<<< HEAD
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
=======
import { MatDialog } from '@angular/material/dialog';
>>>>>>> 8846d83ef7da46eff1b5d40694beb9d15538fc51
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { User } from '../../../interface/user.interface';
import { CustomUpperCasePipe } from '../../../pipes/upper-case.pipes';
import { RemoveDashesPipe } from '../../../pipes/remove-dashes.pipe';
import { RedDirective } from '../../../directives/red.directive';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ShadowDirective } from '../../../directives/shadow.directives';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    CustomUpperCasePipe,
    RemoveDashesPipe,
    RedDirective,
    MatCardModule,
    MatButtonModule,
    ShadowDirective,
    MatTooltipModule,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  @Input()
  public user!: User;

  @Output()
  public deleteUser = new EventEmitter<number>();

  @Output()
  public editUser = new EventEmitter<User>();

  public openDeleteDialog(): void {
<<<<<<< HEAD
    const dialogRef: MatDialogRef<DeleteUserDialogComponent> = this.dialog.open(DeleteUserDialogComponent, {
=======
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
>>>>>>> 8846d83ef7da46eff1b5d40694beb9d15538fc51
      data: { user: this.user },
    });
    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
        this.snackBar.open('Пользователь удален', 'Ok', {
          duration: 3000,
        });
      }
    });
  }

  public openDialog(): void {
<<<<<<< HEAD
    const dialogRef: MatDialogRef<EditUserDialogComponent> = this.dialog.open(EditUserDialogComponent, {
=======
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
>>>>>>> 8846d83ef7da46eff1b5d40694beb9d15538fc51
      data: { user: this.user },
    });
    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь отредактирован', 'Ok', {
          duration: 3000,
        });
      }
    });
  }
}