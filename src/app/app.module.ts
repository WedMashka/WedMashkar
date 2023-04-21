import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartBanerComponent } from './General/start-baner/start-baner.component';
import { NotFoundComponent } from './General/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StartBanerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
