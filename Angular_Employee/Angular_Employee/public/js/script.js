var app=angular.module("employeeApp",['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(function($routeProvider) {

	$routeProvider
	.when("/edit", {
		templateUrl : "../html/employee-edit.html",
		controller:"employeeCtrl"
	})
	.when("/add", {
		templateUrl : "../html/employee-new.html",
	});
});



 app.factory('employeeService',function($http){
	var deleteSelect;
	var employees;
	return {
		deleteSelect:deleteSelect,
		employees:employees,
		getJsonData:function(){
				var postData=$http.get("../json/employee.json")
			  .then(function(response) {
					return response.data;
					 
			  });
			  return postData;
		  },
		changeData:function(){
			//for delete ->1 and edit ->0 and new->2
			console.log("asdfasdfas");
			
			console.log(this.employees);
			
			for(var i in (this.employees)){
				console.log("asdfasdfas");
				if(this.deleteSelect.email===this.employees[i].email)
				{	
						this.employees.splice(i, 1);
				}
			}
			return (this.employees);
		  }
	}
 });


app.controller('employeeCtrl', 
    function($log,$scope,$http,$uibModal,employeeService) {
		
		
		var $ctrl = this;

		$ctrl.animationsEnabled = true;

		$scope.open = function (size) {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				size: size
			});
		};
	
		employeeService.getJsonData().then(function(data){
			//$scope.employees=data;
			employeeService.employees=data;
			$scope.employees=employeeService.employees;
		} );
		
		$scope.editEmployee=function(empEdit){
			$scope.emp=empEdit;
		} 
		$scope.newEmployee=function(empEdit){
			$scope.employees.push(empEdit);
		}
		//$scope.changeData=employeeService.changeData;
		
		$scope.getDeleteSelect=function(delEmp){
			employeeService.deleteSelect=delEmp;
		}
		
});

app.controller('ModalInstanceCtrl', function ($uibModalInstance,employeeService) {
  var $ctrl = this;
  
  $ctrl.ok = function () {
	console.log(employeeService.employees);
	employeeService.changeData();
	console.log(employeeService.employees);
    $uibModalInstance.close();
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});





app.filter('yesno', function(){
	return function(boolBench){
		if(boolBench==="true"){
			return 'Yes'
		} else if(boolBench==="false") {
			return 'No'
		}
		else{
			return 'Not specified'
		}
	}
})