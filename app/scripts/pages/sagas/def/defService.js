'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.DefService
 * @description
 * # DefService
 *
 * Service to deal with the online game for def
 */

function DefService(DataService, $q){
  var capsules = [];

  /**
   * Stock all the capsules and the next
   */
  function fetchAllCapsules(){
    return $q(function(resolve, reject) {
      DataService.getCapsulesDef().then(function(data){
        capsules = data;
        resolve();
      }, function(error){
        console.log(error.message);
      });
    });
  }

  /**
   * Return the promise of an array of the next capsules
   * @param id, array of the current def capsule
   * @returns Promise
   */
  function getNextCapsules(id){
    return $q(function(resolve){
      if(capsules.length === 0) {
        fetchAllCapsules().then(function(){
          resolve(capsules[id]);
        });
      }
      else{
        resolve(capsules[id]);
      }
    });
  }

  return {
    fetchAllCapsules : fetchAllCapsules,
    getNextCapsules : getNextCapsules
  };
}

angular.module('diwancorpApp')
  .factory('DefService', DefService);
