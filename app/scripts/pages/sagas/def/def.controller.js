(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:DefCtrl
   * @description
   * # DefCtrl
   * Controller of the diwancorpApp
   */

  function DefCtrl($scope, NavigationService, DefService, $routeParams, $sce) {
    NavigationService.setCurrentMenu('sagas');

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

  DefCtrl.$inject = ['$scope', 'NavigationService', 'DefService', '$routeParams', '$sce'];
})();
