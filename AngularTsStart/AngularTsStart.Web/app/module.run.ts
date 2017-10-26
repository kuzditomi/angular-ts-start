require('./styles/style.less');

import { app } from './module';

angular.element(document).ready(function () {
    angular.bootstrap(document, ['example']);
});