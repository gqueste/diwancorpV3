(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:SagaCtrl
   * @description
   * # SagaCtrl
   * Controller of the diwancorpApp
   */

  function SagaCtrl($scope, NavigationService, DataService, $routeParams) {
    NavigationService.setCurrentMenu('sagas');
    $scope.saga = {};
    var idSaga = $routeParams.idSaga;

    init();

    function init(){
      loadSaga(idSaga);
    }

    function loadSaga(id){
      DataService.getSaga(id).then(function(data){
        $scope.saga = data;
      }, function(error){
        console.log(error.message);
      });
    }

  }

  angular
    .module('diwancorpApp')
    .controller('SagaCtrl', SagaCtrl);

  SagaCtrl.$inject = ['$scope', 'NavigationService', 'DataService', '$routeParams'];
})();
