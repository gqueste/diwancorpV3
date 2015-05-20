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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
