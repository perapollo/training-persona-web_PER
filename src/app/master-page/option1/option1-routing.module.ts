import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Option1Component } from './option1.component';

const routes: Routes = [
  {
    path: '',
    component: Option1Component
  }
];

/**
 * Configuracion de rutas para el modulo option 1.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Option1RoutingModule { }
