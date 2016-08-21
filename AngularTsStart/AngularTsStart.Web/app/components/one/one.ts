import {app} from '../../module';
import {IDataService} from '../../shared/data-service';

class OneController {
    static $inject = ['$scope', 'Data'];

    constructor(private scope: any, private dataService: IDataService) {
        scope.state = 'one ts';
        scope.data = dataService.Data;
    }
}

app.controller('oneController', OneController);