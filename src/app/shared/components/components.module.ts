import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputTextComponent } from './input-text/input-text.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DemoMaterialModule } from '../material/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

import { InputDateComponent } from './input-date/input-date.component';
import { InputHourComponent } from './input-hour/input-hour.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputTextComponent,
    InputDateComponent,
    InputHourComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    DemoMaterialModule,
  ],
  exports: [HeaderComponent, InputTextComponent],
})
export class ComponentsModule {}
