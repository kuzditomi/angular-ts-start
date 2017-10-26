require('./styles/style.less');

import { app } from './module';
import { NgModule, forwardRef } from "@angular/core";
import { UpgradeAdapter } from "@angular/upgrade";

export const adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));

import { MyNg2Module } from "./module.new";

angular.element(document).ready(function () {
    adapter.bootstrap(document.body, ['example']).ready(function () {
    });
});