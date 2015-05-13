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

    var deferred = $q.defer();

    $http.get('./data/news.json').success(function(data){
      if(data.hasOwnProperty('news')) {

        for(var i = 0; i < data.news.length; i++){
          data.news[i].image = types[data.news[i].newsType].image;
        }

        deferred.resolve(data.news);
      }
      else{
        deferred.reject(new Error('No object news in ./data/news.json'));
      }
    }).error(function(error){
      deferred.reject(new Error('No access to ./data/news.json ' + error.message));
    });
    return deferred.promise;
  }

  /**
   * Get the object to introduce the website
   * @returns {promise}
   */
  function getPresentation(){
    var deferred = $q.defer();

    $http.get('./data/presentation.json').success(function(data){
      if(data.hasOwnProperty('presentation')) {
        deferred.resolve(data.presentation);
      }
      else{
        deferred.reject(new Error('No object presentation in ./data/presentation.json'));
      }
    }).error(function(error){
      deferred.reject(new Error('No access to ./data/presentation.json ' + error.message));
    });
    return deferred.promise;
  }

  /**
   * Get a list of all sagas
   * @returns {promise}
   */
  function getSagas(){
    var deferred = $q.defer();

    $http.get('./data/sagas.json').success(function(data){
      if(data.hasOwnProperty('sagas')) {
        deferred.resolve(data.sagas);
      }
      else{
        deferred.reject(new Error('No object sagas in ./data/sagas.json'));
      }
    }).error(function(error){
      deferred.reject(new Error('No access to ./data/sagas.json ' + error.message));
    });
    return deferred.promise;
  }

  return {
    getLatestNews: getLatestNews,
    getPresentation: getPresentation,
    getSagas : getSagas
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
