import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const name = 'ildar';

// if (name === 'ildar') {
// console. log ('name is ildar')
// } else {
//   console. log ('ERROR')
// }



// const func1 = (value: number) => console. log('number is', value);

// func1 (123);

const names = ['I', 'F', 'S', 'D'];

// name.forEach (
//  (name) => {
//   console. log ('names is:', name) 
//  }
// )



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Католог';

  readonly lightItem1 =  'Каталог';

  readonly lightItem2 = 'Стройматериалы';

  readonly lightItem3 = 'Инструменты';

  readonly lightItem4 = 'Электрика';

  readonly lightItem5 = 'Интерьер и одежда';
}