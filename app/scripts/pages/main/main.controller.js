'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diwancorpApp
 */

function MainCtrl(DataService, NavigationService, $scope) {
  NavigationService.setCurrentMenu('accueil');

  $scope.news = {};
  init();

  function init(){
    loadNews();
  }

  function loadNews(){
    DataService.getLatestNews().then(function(data){
      $scope.news = data;
    }, function(error){
      console.log(error.message);
    });
  }

}

angular.module('diwancorpApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject=['DataService', 'NavigationService' ,'$scope'];
