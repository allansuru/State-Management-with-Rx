import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Store } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
