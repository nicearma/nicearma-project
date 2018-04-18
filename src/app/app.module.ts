import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NicearmaLibModule} from "nicearma-lib/dist/nicearma-lib";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NicearmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
