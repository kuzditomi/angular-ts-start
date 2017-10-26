import 'zone.js';
import 'reflect-metadata';
import { app } from '../../module';

import { Component, Inject } from "@angular/core";
import { IDataService } from "../../shared";

@Component({
    selector: 'ng2-comp',
    template: '<h1>This is a new angular component.</h1><p>example to binding: {{bdingingExample}}.<p> example to input and multiply:<input type="number" [(ngModel)]="myNumber"/> * 2 = {{myNumber * 2}}</p><p>example to shared data: {{data.text}}</p><p>example to writing shared data: <input type="text" [(ngModel)]="data.text"/></p>',
})
export class Ng2Component {
    bindingExample: string;
    myNumber: number;
    data: any;

    constructor(
        @Inject('Data') dataService: IDataService
    ) {
        this.bindingExample = "works!"
        this.myNumber = 0;
        this.data = dataService.Data;
    }
}