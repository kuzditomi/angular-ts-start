import 'zone.js';
import 'reflect-metadata';
import { app } from '../../module';

import { Component, forwardRef } from "@angular/core";

@Component({
    selector: 'ng2-comp',
    template: '<h1>EZ EGY ÚJ ANGULAR KOMPONENS</h1>',
})
export class Ng2Component {
}