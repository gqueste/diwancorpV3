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
    'angular-google-analytics'
  ])
  .config(function ($routeProvider, AnalyticsProvider) {
    AnalyticsProvider.setAccount('UA-66675155-1');
    AnalyticsProvider.trackPages(false);
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/pages/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/sagas', {
        templateUrl: 'scripts/pages/sagas/sagas.html',
        controller: 'SagasCtrl'
      })
      .when('/sagas/:idSaga', {
        templateUrl: 'scripts/pages/sagas/saga/saga.html',
        controller: 'SagaCtrl'
      })
      .when('/sagas/def/jeu', {
        templateUrl: 'scripts/pages/sagas/def/def.html',
        controller: 'DefCtrl'
      })
      .when('/sagas/def/jeu/:idCapsule', {
        templateUrl: 'scripts/pages/sagas/def/def.html',
        controller: 'DefCtrl'
      })
      .when('/ecrits', {
        templateUrl: 'scripts/pages/ecrits/ecrits.html',
        controller: 'EcritsCtrl'
      })
      .when('/ecrits/:idEcrit', {
        templateUrl: 'scripts/pages/ecrits/ecrit/ecrit.html',
        controller: 'EcritCtrl'
      })
      .when('/diwan', {
        templateUrl: 'scripts/pages/about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/partenaires', {
        templateUrl: 'scripts/pages/partners/partners.html',
        controller: 'PartnersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
