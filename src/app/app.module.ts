import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ExternalService, NicearmaLibModule, routes} from 'nicearma-lib/dist/nicearma-lib';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {Page1Component} from './page1/page1.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: Page1Component},
      ...routes
    ]),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    NicearmaLibModule
  ],
  providers: [HttpClientModule,
    {
      provide: ExternalService,
      useFactory: (httpClient: HttpClient) => {
        return new ExternalService(httpClient);
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
