import {app} from '../module';

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