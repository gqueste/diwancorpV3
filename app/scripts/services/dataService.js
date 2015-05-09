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

  return {
    getLatestNews: getLatestNews
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
