import { Component, OnInit } from '@angular/core';

import { DataService }   from '../services/data.service';
import {Temperatura} from '../model';

@Component({
    selector: 'temperatura',
    templateUrl: './temperatura.component.html',
    styleUrls: ['./temp.comp.css']
})
export class TempComponent implements OnInit {
    twoImage = '../app/temperatura/imagens/two.png';
    beerImage = '../app/temperatura/imagens/beer.png';
    tempImage = '../app/temperatura/imagens/temperature.png';
    temperatura: Temperatura;
    temperaturas: Temperatura[];

    constructor(private dataservice: DataService) { }


    ngOnInit() { 
        this.getTemperatures();

    }

    getTemperatures(){
        this.dataservice.getTemperatures().then(
            temps =>{
                this.temperaturas = temps;
            });
    }


    getTemperatura(){
           this.dataservice.getTemperatura().then(
            temp =>{
                this.temperatura = temp;
            });
    }



}