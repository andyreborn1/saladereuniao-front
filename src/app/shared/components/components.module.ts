import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputTextComponent } from './input-text/input-text.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DemoMaterialModule } from '../material/material-module';
import {
  FormControlName,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, InputTextComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, InputTextComponent],
})
export class ComponentsModule {}
