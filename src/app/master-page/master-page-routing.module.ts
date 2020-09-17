import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: 'option1',
        loadChildren: () => import('./option1/option1.module').then(m => m.Option1Module)
      },
      {
        path: 'option2',
        loadChildren: () => import('./option2/option2.module').then(m => m.Option2Module)
      },
    ]
  },
];

/**
 * Configuracion de rutas para el modulo master page.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterPageRoutingModule { }
