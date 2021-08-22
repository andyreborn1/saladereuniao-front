import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { DemoMaterialModule } from '../shared/material/material-module';

@NgModule({
  declarations: [ListComponent, CreateComponent, DetailsComponent],
  imports: [CommonModule, DemoMaterialModule],
  exports: [ListComponent],
})
export class RoomModule {}
