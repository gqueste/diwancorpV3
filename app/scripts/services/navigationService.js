'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.NavigationService
 * @description
 * # NavigationService
 *
 * Service to follow the user
 */

function NavigationService(){

  var currentMenu = 'accueil';

  function getCurrentMenu(){
    return currentMenu;
  }

  function setCurrentMenu(menu){
    console.log('NavigationService : menu ' + menu);
    currentMenu = menu;
  }

  return {
    setCurrentMenu : setCurrentMenu,
    getCurrentMenu : getCurrentMenu
  };
}


angular.module('diwancorpApp')
  .factory('NavigationService', NavigationService);
