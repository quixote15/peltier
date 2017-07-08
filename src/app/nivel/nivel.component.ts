import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nivel',
    templateUrl: './nivel.component.html',
 
})
export class NivelComponent implements OnInit {

    totalCopos:number = 1;
    valorCopo = 500; //um copo === 500 ml

    constructor() { }

    ngOnInit() { }


    nivelCalcutations(){

    }
}