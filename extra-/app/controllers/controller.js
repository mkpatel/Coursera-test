angular.module('mainApp')

.controller('bookController',['$scope','bookFactory',function($scope,bookFactory){


		$scope.books = bookFactory.getBooks();
            
            
            }]);
