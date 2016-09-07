angular.module('mainApp')

.controller('authController',['$scope','$stateParams','authorFactory',function($scope,$stateParams,authorFactory){


    /*displaying author data */
    
    var index; 
      
    authorFactory.getAuthor($stateParams.id).then(function(data){
            
            //index = data.findIndex(x => x.name==$stateParams.id);
      
            $scope.author = data; /*On Success*/
        
            },
            function(data) {
            
                alert(data); /*On Failure*/
            });
    
        
}]); /*End of bookController*/