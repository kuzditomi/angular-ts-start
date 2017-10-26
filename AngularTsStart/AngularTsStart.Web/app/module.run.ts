require('./styles/style.less');

import { app } from './module';
import { NgModule, forwardRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeAdapter } from "@angular/upgrade";
import { Ng2Component } from "./components/newangular/newangularcomponent";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [Ng2Component],
    imports: [BrowserModule, FormsModule]
})
class MyNg2Module { }

export const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));

angular.element(document).ready(function () {
    app.directive('ng2Comp', adapter.downgradeNg2Component(Ng2Component) as any);

    adapter.bootstrap(document.body, ['example']).ready(function () {
    });
});