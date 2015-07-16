(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name diwancorpApp.controller:DefCtrl
   * @description
   * # DefCtrl
   * Controller of the diwancorpApp
   */

  function DefCtrl($scope, NavigationService, DefService) {
    NavigationService.setCurrentMenu('sagas');

    DefService.fetchAllCapsules();

  }







  angular
    .module('diwancorpApp')
    .controller('DefCtrl', DefCtrl);

  DefCtrl.$inject = ['$scope', 'NavigationService', 'DefService'];
})();
