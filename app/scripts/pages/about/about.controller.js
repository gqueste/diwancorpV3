'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the diwancorpApp
 */

function AboutCtrl($scope, NavigationService) {
  NavigationService.setCurrentMenu('sagas');

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
}


angular.module('diwancorpApp')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject=['$scope', 'NavigationService'];


