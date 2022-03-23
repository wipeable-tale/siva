import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpServiceComponent } from './core/http-service/http-service.component'


@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent,
    HttpServiceComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
