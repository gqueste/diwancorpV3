(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:SagaCtrl
   * @description
   * # EcritCtrl
   * Controller of the diwancorpApp
   */

  function EcritCtrl($scope, NavigationService, TitleService, DataService, $routeParams, Analytics) {
    NavigationService.setCurrentMenu('ecrits');
    $scope.ecrit = {};
    var idEcrit = $routeParams.idEcrit;

    Analytics.trackPage('ecrits/'+idEcrit, 'Ecrit '+idEcrit);

    init();

    function init(){
      loadEcrit(idEcrit);
    }

    function loadEcrit(id){
      DataService.getEcrit(id).then(function(data){
        $scope.ecrit = data;
        TitleService.setWindowTitle($scope.ecrit.nom);
      }, function(error){
        console.log(error.message);
      });
    }

  }

  angular
    .module('diwancorpApp')
    .controller('EcritCtrl', EcritCtrl);

  EcritCtrl.$inject = ['$scope', 'NavigationService', 'TitleService', 'DataService', '$routeParams', 'Analytics'];
})();
