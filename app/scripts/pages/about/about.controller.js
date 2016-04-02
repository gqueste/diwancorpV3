'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diwancorpApp
 */

function AboutCtrl($scope, NavigationService, TitleService, Analytics) {
  NavigationService.setCurrentMenu('diwan');
  TitleService.setWindowTitle('A propos');
  Analytics.trackPage('about', 'About');
}


angular.module('diwancorpApp')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject=['$scope', 'NavigationService', 'TitleService', 'Analytics'];
