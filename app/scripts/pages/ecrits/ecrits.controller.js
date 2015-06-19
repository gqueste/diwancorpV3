(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:SagasCtrl
   * @description
   * # EcritsCtrl
   * Controller of the diwancorpApp
   */

  function EcritsCtrl($scope, NavigationService, DataService) {
    NavigationService.setCurrentMenu('ecrits');

    $scope.ecrits = {};

    init();

    function init(){
      loadEcrits();
    }

    function loadEcrits(){
      DataService.getEcrits().then(function(data){
        $scope.ecrits = data;
      }, function(error){
        console.log(error.message);
      });
    }


  }







  angular
    .module('diwancorpApp')
    .controller('EcritsCtrl', EcritsCtrl);

  EcritsCtrl.$inject = ['$scope', 'NavigationService', 'DataService'];
})();
