import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { HeaderComponent } from './header/header.component';
import { SubCarPagesComponent } from './sub-car-pages/sub-car-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDownButtonComponent,
    HeaderComponent,
    SubCarPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
