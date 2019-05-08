import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule, HttpClientXsrfModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Globals } from './app.globals';
import { Utils } from './app.utils';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SuiModule } from 'ng2-semantic-ui';
import { BookingComponent } from './booking/booking.component';
import { AddComponent } from './add/add.component';
import { ManageComponent } from './manage/manage.component';
import { DrDetailsComponent } from './dr-details/dr-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    BookingComponent,
    AddComponent,
    ManageComponent,
    DrDetailsComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule
  ],
  providers: [Globals,Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
