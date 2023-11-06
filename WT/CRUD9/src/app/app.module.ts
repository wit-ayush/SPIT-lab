import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentdisplayComponent } from './studentdisplay/studentdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentformComponent,
    StudentdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
