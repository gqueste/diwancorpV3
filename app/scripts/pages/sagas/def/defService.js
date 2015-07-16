'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.DefService
 * @description
 * # DefService
 *
 * Service to deal with the online game for def
 */

function DefService(DataService){
  var capsules = [];

  /**
   * Stock all the capsules and the next
   */
  function fetchAllCapsules(){
    if(capsules.length === 0){
      DataService.getCapsulesDef().then(function(data){
        capsules = data;
      }, function(error){
        console.log(error.message);
      });
    }
  }

  /**
   * Return an array of the next capsules
   * @param id, array of the current def capsule
   * @returns []
   */
  function getNextCapsules(id){
    return capsules[id];
  }

  return {
    fetchAllCapsules : fetchAllCapsules,
    getNextCapsules : getNextCapsules
  };
}

angular.module('diwancorpApp')
  .factory('DefService', DefService);
