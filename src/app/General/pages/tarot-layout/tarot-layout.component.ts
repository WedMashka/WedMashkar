import { Component } from '@angular/core';
export interface Content{
  type: string;
  description: string;
  ro?: string;
}
@Component({
  selector: 'app-tarot-layout',
  templateUrl: './tarot-layout.component.html',
  styleUrls: ['./tarot-layout.component.css']
})
export class TarotLayoutComponent {
  select: boolean = true;
  content: Content[] = [
    { type: 'Расклады на отношения и любовь', description: 'Эот расклад подходит для тех, кто находится в поиске любви. Или если в отношениях что-то не так. Используется как при новых, начинающихся отношениях, так и при действующих.' , ro:'love'},
    { type: 'Расклады на карьеру и деньги', description: 'Подойдет , если вы выбираете путь по жизни, род занятий, профессию, хобби, или просто желаете разобраться в себе лучше. При помощи этого гадания можно выявить причины финансовых проблем и выбрать путь к новой финансовой ступени.', ro:'money' },
    { type: 'Психологические расклады', description: 'Поможет разобраться во внутреннем мире человека. Выявляет главную проблему человека, даже если он сам о ней не знает.', ro:'psychology' },
    { type: 'Расклады на год', description: 'Годовой расклад на картах Таро дает полную картину предстоящего года в плане событий во всех сферах жизни человека. Этот расклад делают в конце старого или начале наступившего года. А также в свой День Рождения. Этот расклад соответствует 12 домам планет в астрологии и дает ответ на события в каждой сфере. ', ro:'year' },
    { type: 'Ситуативные расклады', description: 'Помогает разобраться в сложном или не стандартном вопросе.  Можно расмотреть проблему с разных сторон, выявить сильные и слабые стороны, найти конструктивное решение. В данном случае рассматриваться могут абсолютно любые вопросы.', ro:'situation' },
    ]
}
