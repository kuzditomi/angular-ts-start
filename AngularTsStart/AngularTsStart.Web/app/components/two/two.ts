import {app} from '../../module';
import {IDataService} from '../../shared/data-service';

export interface ITwoControllerScope extends angular.IScope {
    state: string;
    data: IDataService;
}

class TwoController {
    static $inject = ['$scope', 'Data'];

    constructor(private scope: ITwoControllerScope, private dataService: IDataService) {
        scope.state = 'two works';
        scope.data = dataService.Data;
    }
}

app.controller('twoController', TwoController);