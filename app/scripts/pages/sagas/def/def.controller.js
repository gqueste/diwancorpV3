(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:DefCtrl
   * @description
   * # DefCtrl
   * Controller of the diwancorpApp
   */

  function DefCtrl($scope, NavigationService, TitleService, DefService, $routeParams, $sce, Analytics) {
    NavigationService.setCurrentMenu('sagas');
    TitleService.setWindowTitle('Le Donjon en Folie');

    Analytics.trackPage('sagas/def/'+$routeParams.idCapsule, 'Saga DEF '+$routeParams.idCapsule);

    $scope.capsule = {};

    init();

    function init(){
      var capsule = $scope.capsule;
      capsule.id = $routeParams.idCapsule;
      if(capsule.id == undefined){
        capsule.id = '00';
      }
      capsule.next = DefService.getNextCapsules(capsule.id).then(function(data){
        capsule.next = data;
      });
    }

    $scope.getAudio = function(id){
      return $sce.trustAsResourceUrl('./mp3/donjon-en-folie-'+id+'.mp3');
    }
  }







  angular
    .module('diwancorpApp')
    .controller('DefCtrl', DefCtrl);

  DefCtrl.$inject = ['$scope', 'NavigationService', 'TitleService', 'DefService', '$routeParams', '$sce', 'Analytics'];
})();
