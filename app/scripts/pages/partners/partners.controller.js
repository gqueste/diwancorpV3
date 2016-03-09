'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the diwancorpApp
 */

function PartnersCtrl(DataService, NavigationService, $scope) {
  NavigationService.setCurrentMenu('partenaires');

  $scope.partenaires = {};
  init();

  function init(){
    loadPartners();
  }

  function loadPartners(){
    DataService.getPartenaires().then(function(data){
      $scope.partenaires = data;
    }, function(error){
      console.log(error.message);
    });
  }

}

angular.module('diwancorpApp')
  .controller('PartnersCtrl', PartnersCtrl);

PartnersCtrl.$inject=['DataService', 'NavigationService' ,'$scope'];
