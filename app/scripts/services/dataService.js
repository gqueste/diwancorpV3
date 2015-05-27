'use strict';

/**
 * @ngdoc function
 * @name diwancorpApp.services.DataService
 * @description
 * # DataService
 *
 * Service to return data
 */

function DataService($http, $q, $sce){

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

      var statusUi = {
        'En cours' : {
          'labelClass' : 'label-primary'
        },
        'Terminée' : {
          'labelClass' : 'label-success'
        },
        'En pause' : {
          'labelClass' : 'label-warning'
        }
      };

      $http.get('./data/sagas.json').success(function(data){
        if(data.hasOwnProperty('sagas')) {

          for(var i = 0; i < data.sagas.length; i++){
            data.sagas[i].statusClass = statusUi[data.sagas[i].statut].labelClass;
          }

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

  /**
   * Get a representation of the saga whose id is given
   * @param id of the saga
   * @returns {promise}
   */
  function getSaga(id){
    return $q(function(resolve, reject){
      var adresse = './data/sagas/' + id + '.json';
      $http.get(adresse).success(function(data){
        for(var i = 0; i < data.episodes.length; i++){
          var episode = data.episodes[i];
          episode.audio = [
            {
              src : $sce.trustAsResourceUrl(episode.lien), type:'audio/mpeg'
            }
          ];
        }
        resolve(data);
      }).error(function(error){
        reject(new Error('No access to ' + adresse + error.message));
      });
    });
  }




  return {
    getLatestNews: getLatestNews,
    getPresentation: getPresentation,
    getSagas : getSagas,
    getSaga : getSaga
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
