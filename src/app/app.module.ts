import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OreComponent } from './ore/ore.component';
import { CommonModule } from '@angular/common';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    OreComponent,
    CounterAppComponent,
    TraineeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
