import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Option2RoutingModule } from './option2-routing.module';
import { Option2Component } from './option2.component';

/**
 * Modulo para option 2.
 */
@NgModule({
  declarations: [Option2Component],
  imports: [
    CommonModule,
    Option2RoutingModule
  ]
})
export class Option2Module { }
