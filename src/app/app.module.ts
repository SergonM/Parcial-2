import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosaurioModule } from './dinosaurio/dinosaurio.module';
import { HttpClientModule } from '@angular/common/http';
import { DinosaurioDetailComponent } from './dinosaurio-detail/dinosaurio-detail.component';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinosaurioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
