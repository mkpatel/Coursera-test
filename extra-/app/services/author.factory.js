angular.module('mainApp')



.factory('authorFactory', function($http,$q,baseUrl) {
 
    /*Creating an object*/        

    var authfac = {};

    /*Return a book of array*/
    authfac.getAuthor = function(author) {
        
        console.log(author);
        
        var deferred = $q.defer();    /*Creating an deffered object */
  
            $http({

                method:'POST',
                url: baseUrl+'/author/byname',
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                },
                data: {
                    
                    'name' : author
                }
 

            }).success(function(data){
                
                console.log(data);
                deferred.resolve(data); /*On success resolved the Data*/

            }).error(function(data){
 
                deferred.reject('There was an error'); /*On Failure show the error*/

            })

            return deferred.promise; /*returing the promise*/

            };
        

    /*Returning a single book */
    
/*
    bookfac.getBook = function(index) {

    	return books[index];
    }
*/

    return authfac;

 });