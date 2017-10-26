import {app} from '../../module';
import {IDataService} from '../../shared/data-service';

class OneController {
    static $inject = ['$scope', 'Data', 'NewData'];

    constructor(private scope: any, private dataService: IDataService, newData: IDataService) {
        scope.state = 'one ts';
        scope.data = dataService.Data;
        scope.newdata = newData.Data;
    }
}

app.controller('oneController', OneController);