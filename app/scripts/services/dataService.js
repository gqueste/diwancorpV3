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

  var latestNews;
  var sagas;
  var ecrits;
  var capsulesDef;
  var partners;

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

      if(!latestNews){
        $http.get('./data/news.json').success(function(data){
          if(data.hasOwnProperty('news')) {

            for(var i = 0; i < data.news.length; i++){
              data.news[i].image = types[data.news[i].newsType].image;
            }
            latestNews = data.news;
            resolve(data.news);
          }
          else{
            reject(new Error('No object news in ./data/news.json'));
          }
        }).error(function(error){
          reject(new Error('No access to ./data/news.json ' + error.message));
        });
      }
      else {
        resolve(latestNews);
      }
    });
  }

  /**
   * Get a list of all sagas
   * @returns {promise}
   */
  function getSagas(){
    return $q(function(resolve, reject) {
      if(!sagas){
        $http.get('./data/sagas.json').success(function(data){

          if(data.hasOwnProperty('sagas')) {
            addStatutsClass(data.sagas);
            sagas = data.sagas;
            resolve(data.sagas);
          }
          else{
            reject(new Error('No object sagas in ./data/sagas.json'));
          }
        }).error(function(error){
          reject(new Error('No access to ./data/sagas.json ' + error.message));
        });
      }
      else {
        resolve(sagas);
      }
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
        resolve(data);
      }).error(function(error){
        reject(new Error('No access to ' + adresse + error.message));
      });
    });
  }




  /**
   * Get a list of all ecrits
   * @returns {promise}
   */
  function getEcrits(){
    return $q(function(resolve, reject) {
      if(!ecrits){
        $http.get('./data/ecrits.json').success(function(data){
          if(data.hasOwnProperty('ecrits')) {
            if(data.ecrits.hasOwnProperty('livres')){
              addStatutsClass(data.ecrits.livres);
            }
            ecrits = data.ecrits;
            resolve(data.ecrits);
          }
          else{
            reject(new Error('No object ecrits in ./data/ecrits.json'));
          }
        }).error(function(error){
          reject(new Error('No access to ./data/ecrits.json ' + error.message));
        });
      }
      else {
        resolve(ecrits);
      }
    });
  }


  /**
   * Get a representation of the ecrit whose id is given
   * @param id of the ecrit
   * @returns {promise}
   */
  function getEcrit(id){
    return $q(function(resolve, reject){
      var adresse = './data/ecrits/' + id + '.json';
      $http.get(adresse).success(function(data){
        resolve(data);
      }).error(function(error){
        reject(new Error('No access to ' + adresse + error.message));
      });
    });
  }


  /**
   * Add a statut Class based on typical status
   * @param data
   */
  function addStatutsClass(data){
    for(var i = 0; i < data.length; i++){
      if(data[i].hasOwnProperty('statut')){
        data[i].statusClass = statusUi[data[i].statut].labelClass;
      }
    }
  }

  /**
   * Get the object representing the def capsules for the online game
   * @returns {promise}
   */
  function getCapsulesDef(){
    return $q(function(resolve, reject) {
      if(!capsulesDef){
        $http.get('./data/sagas/def-next.json').success(function(data){
          if(data.hasOwnProperty('next')) {
            capsulesDef = data.next;
            resolve(data.next);
          }
          else{
            reject(new Error('No object presentation in ./data/sagas/def-next.json'));
          }
        }).error(function(error){
          reject(new Error('No access to ./data/sagas/def-next.json ' + error.message));
        });
      }
      else {
        resolve(capsulesDef);
      }
    });
  }

  /**
   * Get the object representing the partners
   * @returns {promise}
   */
  function getPartenaires(){
    return $q(function(resolve, reject){
      if(!partners){
        $http.get('./data/partners.json').success(function(data){
          partners = data.partners;
          resolve(partners);
        }).error(function(error){
          reject(new Error('No access to ./data/partners.json ' + error.message));
        });
      }
      else {
        resolve(partners);
      }

    });
  }




  return {
    getLatestNews: getLatestNews,
    getSagas : getSagas,
    getSaga : getSaga,
    getEcrits : getEcrits,
    getEcrit : getEcrit,
    getCapsulesDef : getCapsulesDef,
    getPartenaires : getPartenaires
  };
}

angular.module('diwancorpApp')
  .factory('DataService', DataService);
