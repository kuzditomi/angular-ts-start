require('./styles/style.less');

import { app } from './module';
import { NgModule, forwardRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeAdapter } from "@angular/upgrade";
import { Ng2Component } from "./components/newangular/newangularcomponent";

@NgModule({
    declarations: [Ng2Component],
    imports: [BrowserModule]
})
class MyNg2Module { }


const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));

angular.element(document).ready(function () {
    app.directive('ng2Comp', adapter.downgradeNg2Component(Ng2Component) as any);

    adapter.bootstrap(document.body, ['example']).ready(function () {
    });
});