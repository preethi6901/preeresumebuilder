import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Resume1Component } from './resume1/resume1.component';

const routes: Routes = [
  {
    path : "resume1",component : Resume1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
