'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.controller:PartnersCtrl
 * @description
 * # PartnersCtrl
 * Controller of the diwancorpApp
 */

function PartnersCtrl(DataService, NavigationService, TitleService, $scope, Analytics) {
  NavigationService.setCurrentMenu('partenaires');
  TitleService.setWindowTitle('Partenaires');

  Analytics.trackPage('partners', 'Partenaires');

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

PartnersCtrl.$inject=['DataService', 'NavigationService', 'TitleService' ,'$scope', 'Analytics'];
