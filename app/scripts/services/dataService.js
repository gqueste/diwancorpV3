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

  function getLatestNews(){
    var deferred = $q.defer();

    $http.get('./data/news.json').success(function(data){
      if(data.hasOwnProperty('news')) {
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

  return {
    getLatestNews: getLatestNews
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
