import { app } from '../module';
import { adapter } from "../module.run";

export interface IDataService {
    Data: any;
}

class DataService {
    public Data: any;

    constructor() {
        this.Data = {};
    }
}

app.service('Data', DataService);
adapter.upgradeNg1Provider('Data');