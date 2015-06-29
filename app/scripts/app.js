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
    'ui.bootstrap',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
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
      .when('/ecrits', {
        templateUrl: '/scripts/pages/ecrits/ecrits.html',
        controller: 'EcritsCtrl'
      })
      .when('/ecrits/:idEcrit', {
        templateUrl: '/scripts/pages/ecrits/ecrit/ecrit.html',
        controller: 'EcritCtrl'
      })
      .when('/diwan', {
        templateUrl: '/scripts/pages/about/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
