import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Ng2Component } from "./components/newangular/newangularcomponent";

@NgModule({
    declarations: [Ng2Component],
    imports: [BrowserModule, FormsModule]
})
export class MyNg2Module { }