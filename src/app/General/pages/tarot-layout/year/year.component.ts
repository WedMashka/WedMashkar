import { Component } from '@angular/core';
import { ContentLayout } from '../love/love.component';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent {
  content: ContentLayout[] = [
    {
      type: 'Годовой расклад по месяцам', description: 'Данный расклад делают, как правило в конце уходящего года или начале нового. Так же его можно делать в день своего рождения. Расклад включает в себя информацию о событиях, которые будут происходить с вами в течение предстоящего года, всего 12 позиций.', point: [''] },
    {
      type: 'Годовой расклад по сферам жизни', description: 'Этот расклад так же рекомендуется делать в начале нового года. В него входит 9 позиций, отвечающие на вопросы:', point: ['С чем вы выходите из прошлого года',
'Основные задачи, которые перенесли в новый год',
 'Главная задача нового года',
' Настроение года',
'Личная жизнь',
 'Деловая жизнь(работа, карьера, деньги)',
'Неожиданность года',
' Совет карт Таро по всем сферам',
'С чем входите в следующий год.'] }
  ];

  btn1: boolean = false;

  constructor() {
    setInterval(() => {
      if (this.btn1) {
        return this.btn1 = false;
      } else {
        return this.btn1 = true;
      }
    }, 1000);
  }
}
