(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:SagasCtrl
   * @description
   * # SagasCtrl
   * Controller of the diwancorpApp
   */

  function SagasCtrl($scope, NavigationService, DataService) {
    NavigationService.setCurrentMenu('sagas');

    $scope.sagas = [];

    init();

    function init(){
      loadSagas();
    }

    function loadSagas(){
      DataService.getSagas().then(function(data){
        $scope.sagas = data;
      }, function(error){
        console.log(error.message);
      });
    }


  }







  angular
    .module('diwancorpApp')
    .controller('SagasCtrl', SagasCtrl);

  SagasCtrl.$inject = ['$scope', 'NavigationService', 'DataService'];
})();
