(function () {
  'use strict';

  function diwancorpHeader(){
    return{
      restrict: 'E',
      templateUrl: 'scripts/components/header/header.html',
      controller: 'HeaderCtrl'
    }
  }


  angular
    .module('diwancorpApp')
    .directive('diwancorpHeader', diwancorpHeader);

})();
