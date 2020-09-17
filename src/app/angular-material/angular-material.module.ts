import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';

// tslint:disable-next-line: no-any
const MODULES: any[] = [
  MatRadioModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatMenuModule,
  MatExpansionModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  FormsModule,
  MatSidenavModule,
  ReactiveFormsModule,
  MatProgressBarModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule
];

/**
 * Modulo de Angular material.
 */
@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class AngularMaterialModule { }
