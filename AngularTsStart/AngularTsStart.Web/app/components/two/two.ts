import {app} from '../../module';
import {IDataService} from '../../shared/data-service';

export interface ITwoControllerScope extends angular.IScope {
    state: string;
    data: IDataService;
}

class TwoController {
    static $inject = ['$scope', 'Data', 'NewData'];

    constructor(private scope: ITwoControllerScope, private dataService: IDataService, newData: IDataService) {
        scope.state = 'two works';
        scope.data = dataService.Data;
        scope.newdata = newData.Data;
    }
}

app.controller('twoController', TwoController);