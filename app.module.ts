import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicingService} from './service/newsapiservicing.service';
@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [NewsapiservicingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
