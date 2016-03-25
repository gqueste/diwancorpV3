'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diwancorpApp
 */

function AboutCtrl($scope, NavigationService, Analytics) {
  NavigationService.setCurrentMenu('diwan');
  Analytics.trackPage('about', 'About');
}


angular.module('diwancorpApp')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject=['$scope', 'NavigationService', 'Analytics'];


