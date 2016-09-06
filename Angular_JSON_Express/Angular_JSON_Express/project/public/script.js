var myapp = angular.module('myApp',['ngRoute']);


myapp.config(function($routeProvider) {
    $routeProvider
    .when("/edit", {
        templateUrl : "edit.html",
        controller:'order'
    });
   
    
});
myapp.controller('order',function($scope,$http){
   
   /* $scope.employees = {};*/
    var emp1=[];
    $scope.temp = "random";
	$scope.clickfun = function(){
           
        
        
    $http.get("data.json")
      .then(function(response) {

            $scope.employess = response.data;
            //console.log($scope.employess);
            emp1= response.data;

      });
       
		//AJAX call to use the static file 'data.json'
       
//        $.ajax({
//			//path to json file on server'
//			url:"data.json",
//			dataType:"json",
//			type:"GET",
//			success:function(result){
//				console.log(result);
//				$scope.employees=result.employees;
//				 var data = result.employees;
//                var text="";
//				 //for loop to retrieve object from json array
//				 for(var i in data){
//						console.log(data[i]);
//						text+="<tr>" ;
//						//for loop to retrieve properties from object
//						for(var j in data[i] ){
//							console.log(data[i][j]);
//							text+="<td>"+ data[i][j] +"</td>";
//						}
//						text+="</tr>";
//					}
//				  $( "#table-body").html(text);
//			 
//			}
//		});
//        
       
	};

    
    var j='';
    var k ="";
    var cnt=false;
    $scope.ayush = function() {
        
        return j;
    }
    
    $scope.myFunction = function(){
      
        
        
        if(cnt==false)
       {
        j = 'firstName';
        cnt=true;
       }
        else{
        j = '-firstName'; 
            cnt=false;
        }
    };
    
    $scope.myFunction3 = function() {
       
        /*console.log(emp1);
        console.log($scope.temp);*/
        $scope.employees = emp1;
        for(var i in $scope.employees)
        {
            if($scope.employees[i].isOnBench==false)
                $scope.employees[i].isOnBench = "No";
            else
                $scope.employees[i].isOnBench = "Yes";
        }
    };
var emp2 = {};
$scope.submit = function() {
    
    emp2.firstName = this.firstname;
    emp2.lastName = this.lastname;
    emp2.email = this.email;
    emp2.extention = this.extention;
    emp2.doj = this.doj;
    emp2.isOnBench = this.isOnBench;
    emp1.push(emp2);
    $scope.employees = emp1;
  //  console.log($scope.employees);
   
}  

   

$scope.editEmployee = function(employe){

   $scope.emp = employe;
//    $scope.employees=$scope.emp;
   
    
};

});