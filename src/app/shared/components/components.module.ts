import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputTextComponent } from './input-text/input-text.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DemoMaterialModule } from '../material/material-module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, InputTextComponent],
  imports: [CommonModule, AppRoutingModule, DemoMaterialModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
