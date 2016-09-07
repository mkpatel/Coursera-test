angular.module('mainApp')

.controller('bookController',['$scope','$stateParams','bookFactory',function($scope,$stateParams,bookFactory){


    /*displaying books data */
    
   
    
	bookFactory.getBooks().then(function(data){
            
            $scope.books = data ; /*On Success*/
        
            },
            function(data) {
            
                alert(data); /*On Failure*/
            });
        
    
    var index; 
      
    bookFactory.getBooks().then(function(data){
            
            index = data.findIndex(x => x.isbn==$stateParams.id);
      
            $scope.book = data[index] ; /*On Success*/
        
            },
            function(data) {
            
                alert(data); /*On Failure*/
            });
    
        
}]); /*End of bookController*/
