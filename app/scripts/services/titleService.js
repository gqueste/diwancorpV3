'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.TitleService
 * @description
 * # TitleService
 *
 * Service to set the window title
 */

function TitleService($window){

  function setWindowTitle(title){
    var windowTitle = "Diwancorp";
    if(title != ""){
        windowTitle += " | " + title;
    }
    $window.document.title = windowTitle;
  }

  return {
    setWindowTitle : setWindowTitle
  };
}


angular.module('diwancorpApp')
  .factory('TitleService', TitleService);

  TitleService.$inject=['$window'];
