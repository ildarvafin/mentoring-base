import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { User } from '../../../interface/user.interface';
import { CustomUpperCasePipe } from '../../../pipes/upper-case.pipes';
import { RemoveDashesPipe } from '../../../pipes/remove-dashes.pipe';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatDialogModule, MatSnackBarModule, CustomUpperCasePipe, RemoveDashesPipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  public user!: User
  
  @Output()
  public deleteUser = new EventEmitter<number>();

  @Output()
  public editUser = new EventEmitter<User>();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: {user:this.user},
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id)
        this.snackBar.open('Пользователь удален', 'Ok', {
          duration: 3000
        });
      
        console.log('Пользователь удален',this.user.id)
      }
  
      console.log(result)
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user:this.user},
    });
    dialogRef.afterClosed().subscribe(editResult => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
        this.snackBar.open('Пользователь отредактирован', 'Ok', {
          duration: 3000
        });
      } 
    });
  }
}