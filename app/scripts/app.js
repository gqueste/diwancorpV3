'use strict';

/**
 * @ngdoc overview
 * @name diwancorpApp
 * @description
 * # diwancorpApp
 *
 * Main module of the application.
 */
angular
  .module('diwancorpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/scripts/pages/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/sagas', {
        templateUrl: '/scripts/pages/sagas/sagas.html',
        controller: 'SagasCtrl'
      })
      .when('/sagas/:idSaga', {
        templateUrl: '/scripts/pages/sagas/saga/saga.html',
        controller: 'SagaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
