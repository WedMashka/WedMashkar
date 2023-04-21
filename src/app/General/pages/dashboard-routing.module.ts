import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { QuestionComponent } from './question/question.component';
import { TarotLayoutComponent } from './tarot-layout/tarot-layout.component';
import { LoveComponent } from './tarot-layout/love/love.component';
import { YearComponent } from './tarot-layout/year/year.component';
import { MoneyComponent } from './tarot-layout/money/money.component';
import { SituationComponent } from './tarot-layout/situation/situation.component';
import { PsyhologyComponent } from './tarot-layout/psyhology/psyhology.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'contacts',component: ContactsComponent },
      {
        path: 'layout', component: TarotLayoutComponent,
        children: [
          { path: 'love', component: LoveComponent },
          { path: 'year', component: YearComponent },
          { path: 'money', component: MoneyComponent },
          { path: 'situation', component: SituationComponent },
          { path: 'psychology', component: PsyhologyComponent }
      ]
      },
      { path: 'question', component: QuestionComponent },
      {path: '**', component: NotFoundComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
