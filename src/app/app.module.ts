import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './routes/app.routes'
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { TempComponent } from './temperatura/temperatura.component';
import { HomeComponent } from './home/home.component';
import {NivelComponent} from './nivel/nivel.component';
import {InfoComponent} from './informacoes/informacoes.component';


import {InMemoryService} from './services/in-memory-data.service';
import { DataService }   from './services/data.service';

@NgModule({
  imports: 
     [ 
    BrowserModule,
    routes,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryService,{delay: 1500}), //set this db service automagically to respond in 1,5 secs
 
     ],

  declarations: 
  [ AppComponent,
    TempComponent,
    HomeComponent,
    NivelComponent,
    InfoComponent,
   
  ],

  providers: [
    DataService
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
