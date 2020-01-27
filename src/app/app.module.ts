import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OreComponent } from './ore/ore.component';
import { CommonModule } from '@angular/common';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { TraineeComponent } from './trainee/trainee.component';
@NgModule({
  declarations: [
    AppComponent,
    OreComponent,
    CounterAppComponent,
    TraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
