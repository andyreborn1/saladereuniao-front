import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './shared/material/material-module';
import { ComponentsModule } from './shared/components/components.module';
import { NotFoundComponent } from './error/not-found-component/not-found-component.component';
import { RoomModule } from './room/room.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ComponentsModule,
    RoomModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
