import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from '../../user.service';

const func = (date: string) => {return date}

const itemName: string = "О компании"

const vuzov = func (itemName)

const newPages:number[] = [5, 4, 3, 2, 1]

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase(); 
  }
  )

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, DatePipe, HighlightDirective, AsyncPipe,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private readonly dialog = inject(MatDialog);

  public readonly userService = inject(UserService);

  currentDate: Date = new Date();

  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem3 = 'Католог';

  readonly aboutCompany = vuzov;

  menuItems:string[] = upperCaseMenuItems;

  isUpperCase = true;
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase 
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
        width: '400px',
        height: '200px'

      });
  
      dialogRef.afterClosed().subscribe((result: string) => {
        if (result ==='admin') {
          this.userService.loginAsAdmin()
        } else if (result === 'user') {
          this.userService.loginAsUser()
        } else return undefined;
      }
    );
  }

  public logout() {
    if(confirm('Вы точно хотите выйти?')) {
      return this.userService.logout()
    }
    else return false;
  }
}
