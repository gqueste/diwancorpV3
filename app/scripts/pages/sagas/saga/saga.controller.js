(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:SagaCtrl
   * @description
   * # SagaCtrl
   * Controller of the diwancorpApp
   */

  function SagaCtrl($scope, NavigationService, TitleService, DataService, $routeParams, $sce, Analytics) {
    NavigationService.setCurrentMenu('sagas');

    $scope.saga = {};
    var idSaga = $routeParams.idSaga;

    Analytics.trackPage('sagas/'+idSaga, 'Saga '+idSaga);

    init();

    function init(){
      loadSaga(idSaga);
    }

    function loadSaga(id){
      DataService.getSaga(id).then(function(data){
        $scope.saga = data;
        TitleService.setWindowTitle($scope.saga.nom);
      }, function(error){
        console.log(error.message);
      });
    }

    $scope.getAudio = function(episode){
      return $sce.trustAsResourceUrl(episode.lien);
    }

  }

  angular
    .module('diwancorpApp')
    .controller('SagaCtrl', SagaCtrl);

  SagaCtrl.$inject = ['$scope', 'NavigationService', 'TitleService', 'DataService', '$routeParams', '$sce', 'Analytics'];
})();
