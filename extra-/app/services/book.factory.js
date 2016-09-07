
angular.module('mainApp')

.constant('baseUrl','http://172.27.12.104:3000')

.factory('bookFactory', function($http,$q,baseUrl) {
 
    /*Creating an object*/        

    var bookfac = {};

    /*Return a book of array*/
    bookfac.getBooks = function() {
        
        var deferred = $q.defer();    /*Creating an deffered object */
        
            $http({

                method:'GET',
                url: baseUrl + '/book/list',

            }).success(function(data){

                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

            };
        

    /*Returning a single book */
    
   /* bookfac.getBook = function(index) {

    	return books[index];
    }*/

    return bookfac;

 });