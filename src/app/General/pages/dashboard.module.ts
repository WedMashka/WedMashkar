import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TarotLayoutComponent } from './tarot-layout/tarot-layout.component';
import { ContactsComponent } from './contacts/contacts.component';
import { QuestionComponent } from './question/question.component';
import { LoveComponent } from './tarot-layout/love/love.component';
import { MoneyComponent } from './tarot-layout/money/money.component';
import { YearComponent } from './tarot-layout/year/year.component';
import { PsyhologyComponent } from './tarot-layout/psyhology/psyhology.component';
import { SituationComponent } from './tarot-layout/situation/situation.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutComponent,
    TarotLayoutComponent,
    ContactsComponent,
    QuestionComponent,
    LoveComponent,
    MoneyComponent,
    YearComponent,
    PsyhologyComponent,
    SituationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
