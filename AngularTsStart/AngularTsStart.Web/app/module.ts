import { module } from 'angular';

export let app = module('example', [
    require('angular-ui-router')
])
    .config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function (stateProvider, urlRouterProvider, locationProvider) {
            locationProvider.html5Mode(true);
            urlRouterProvider.otherwise("/");
            stateProvider
                .state('one', {
                    url: "/one",
                    templateUrl: "build/components/one/one.html",
                    controller: "oneController"
                })
                .state('two', {
                    url: "/two",
                    templateUrl: "build/components/two/two.html",
                    controller: "twoController"
                });
        }]);