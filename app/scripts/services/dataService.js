'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.DataService
 * @description
 * # DataService
 *
 * Service to return data
 */

function DataService($http, $q){

  /**
   * Get a list of the latest news
   * @returns {promise}
   */
  function getLatestNews(){
    return $q(function(resolve, reject) {
      var types = {
        'saga': {
          'image':'microicone'
        },
        'ecrit': {
          'image':'plumeicone'
        },
        'jeu': {
          'image':'jeuxicone'
        }
      };

      $http.get('./data/news.json').success(function(data){
        if(data.hasOwnProperty('news')) {

          for(var i = 0; i < data.news.length; i++){
            data.news[i].image = types[data.news[i].newsType].image;
          }

          resolve(data.news);
        }
        else{
          reject(new Error('No object news in ./data/news.json'));
        }
      }).error(function(error){
        reject(new Error('No access to ./data/news.json ' + error.message));
      });
    });
  }

  /**
   * Get the object to introduce the website
   * @returns {promise}
   */
  function getPresentation(){
    return $q(function(resolve, reject) {

      $http.get('./data/presentation.json').success(function(data){
        if(data.hasOwnProperty('presentation')) {
          resolve(data.presentation);
        }
        else{
          reject(new Error('No object presentation in ./data/presentation.json'));
        }
      }).error(function(error){
        reject(new Error('No access to ./data/presentation.json ' + error.message));
      });

    });
  }

  /**
   * Get a list of all sagas
   * @returns {promise}
   */
  function getSagas(){
    return $q(function(resolve, reject) {

      $http.get('./data/sagas.json').success(function(data){
        if(data.hasOwnProperty('sagas')) {
          resolve(data.sagas);
        }
        else{
          reject(new Error('No object sagas in ./data/sagas.json'));
        }
      }).error(function(error){
        reject(new Error('No access to ./data/sagas.json ' + error.message));
      });
    });
    
  }

  return {
    getLatestNews: getLatestNews,
    getPresentation: getPresentation,
    getSagas : getSagas
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
