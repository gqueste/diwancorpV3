'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.components.header:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the diwancorpApp header
 */

function HeaderCtrl(NavigationService, $scope) {

  $scope.menus={
    '0_accueilMenu': {
      'id': 'accueil',
      adresse: '',
      'nom': 'Accueil',
      'active': false
    },
    '1_sagasMenu': {
      'id': 'sagas',
      adresse: 'sagas',
      'nom': 'Sagas mp3',
      'active': false
    },
    '2_ecritsMenu': {
      'id': 'ecrits',
      adresse: 'ecrits',
      'nom': 'Ecrits',
      'active': false
    },
    '3_diwan': {
      'id': 'diwan',
      adresse: 'diwan',
      'nom': 'A propos',
      'active': false
    },
    '4_partenairesMenu': {
      'id': 'partenaires',
      adresse: 'partenaires',
      'nom': 'Partenaires',
      'active': false
    }
  };

  $scope.$watch(
    function() {return NavigationService.getCurrentMenu();},
    function(newValue) {
      $scope.changeActiveMenu(newValue);
    }, true);

  $scope.changeActiveMenu = function(valeur){
    angular.forEach($scope.menus, function(value, key) {
      $scope.menus[key].active = value.id == valeur;
    });
  }

}

angular.module('diwancorpApp')
  .controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject=['NavigationService' ,'$scope'];
