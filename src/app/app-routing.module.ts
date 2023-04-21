import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartBanerComponent } from './General/start-baner/start-baner.component';
import { NotFoundComponent } from './General/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: StartBanerComponent },
  {path: 'home',
    loadChildren: () => import('./General/pages/dashboard.module').then((m)=> m.DashboardModule)},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
