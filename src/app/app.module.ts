import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './routes/app.routes'

import { AppComponent }  from './app.component';
import { TempComponent } from './temperatura/temperatura.component';
import { HomeComponent } from './home/home.component';
import {NivelComponent} from './nivel/nivel.component';
import {InfoComponent} from './informacoes/informacoes.component';

@NgModule({
  imports: 
     [ 
    BrowserModule,
    routes
     ],

  declarations: 
  [ AppComponent,
    TempComponent,
    HomeComponent,
    NivelComponent,
    InfoComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
