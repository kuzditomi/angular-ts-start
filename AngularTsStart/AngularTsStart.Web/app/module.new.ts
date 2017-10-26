import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { Ng2Component } from "./components/newangular/newangularcomponent";
import { NewDataService } from "./shared";

@NgModule({
    declarations: [Ng2Component],
    imports: [BrowserModule, FormsModule],
    providers: [NewDataService]
})
export class MyNg2Module { }