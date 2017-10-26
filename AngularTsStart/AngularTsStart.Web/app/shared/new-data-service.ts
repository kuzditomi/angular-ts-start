import { app } from "../module";
import { Injectable } from "@angular/core";
import { adapter } from "../module.run";

export interface INewDataService {
    Data: any;
}

@Injectable()
export class NewDataService implements INewDataService {
    public Data: any;

    constructor() {
        this.Data = {};
    }
}

app.factory("NewData", adapter.downgradeNg2Provider(NewDataService));