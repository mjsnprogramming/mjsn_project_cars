import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCarPagesComponent } from './sub-car-pages/sub-car-pages.component';

const routes: Routes = [
  { path: 'sub-car-pages', component: SubCarPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
