import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FotterComponent } from './componentes/fotter/fotter.component';
import { ArbolComponent } from './componentes/arbol/arbol.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotterComponent,
    ArbolComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
