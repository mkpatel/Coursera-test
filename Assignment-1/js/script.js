jQuery(document).ready(function() {     /* Doing everything after Document is ready() i.e Everything is loaded */

	var username;
	var email;
	var Password;
	var C_password;
	

	
	jQuery("#submit_form").click(function() {

		username = jQuery("input[placeholder='Username']").val();
		email = jQuery("input[placeholder='Email']").val();
		Password = jQuery("input[placeholder='Password']").val();
		C_password = jQuery("input[placeholder='Confirm Password']").val();
		firstname = jQuery("input[placeholder='FirstName']").val();
		empid = jQuery("input[placeholder='EmployeeID']").val();

		if(Perform_validation()) {

				jQuery("#user_form").submit();
		}
		else
		{

			alert("UserName: "+username+"\n"+
					"EmailId: "+email+"\n"+
					"Password :"+Password+"\n"+
					"EmployeeID :"+empid+"\n"+
					"FirstName :"+firstname+"");

		}

		function Perform_validation() {
		
		var IsUserNameValid = validate_username(username);
		var IsEmailValid = validate_email(email);
		var IsPasswordValid = validate_password(Password,C_password);
		var IsPassCnPassSame = false;
		var IsFirstNameValid = validate_firstname(firstname);
		var IsEmployeeidValid = validate_employeeid(empid);

		//alert(IsPasswordValid.first + " " + IsPasswordValid.second );
		
		if(IsPasswordValid.first && IsPasswordValid.second ) {

			if(Password === C_password) {

				IsPassCnPassSame = true
				jQuery("#confirm_message").css("visibility","hidden");
			} else {

				jQuery("#confirm_message").css("visibility","visible");
			}
		}



		

		//if(IsUserNameValid && IsEmailValid) { return true;} else {return false;}
		//return IsUserNameValid;
		}

		/* function to validate username */

		function validate_username(username) {

			console.log(username);
			if(username === undefined || username === "") {

			console.log("inside");	
			//var cs ="color: red !important;background:url('../images/caution2.png') right no-repeat ;line-height: 1.4em;padding-right: 15px;font-weight: bold;font-style: italic;"	
			 //jQuery("input[placeholder='Username']").css("border","1px solid #be4b49");
			 //jQuery("input[placeholder='Username']").css("box-shadow","none");
			 jQuery("input[placeholder='Username']").addClass("red_alert");
			 jQuery("input[placeholder='Username']").attr("placeholder","Username can not be empty").val("").focus().blur("");
			 //attr("placeholder", "Type your answer here");
			 return false;
			}
			else {

				var Re_username = /^[a-zA-Z0-9_-]{6,10}$/;
				
				if(Re_username.test(username)) {

					return true;
				} else {

					jQuery("input[placeholder='Username']").addClass("red_alert");
			 		jQuery("input[placeholder='Username']").attr("placeholder","Invalid Username").val("").focus().blur("");
					return false;}

				}
				
			}

			/* Function to validate email id */
			function validate_email(email) {

				if(email === undefined || email === "") {

				jQuery("input[placeholder='Email']").addClass("red_alert");
			    jQuery("input[placeholder='Email']").attr("placeholder","Email can not be empty").val("").focus().blur("");
			    return false;

			} else {

				var Re_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

				if(Re_email.test(email)) {

					return true;
				} else {

					jQuery("input[placeholder='Email']").addClass("red_alert");
			    	jQuery("input[placeholder='Email']").attr("placeholder","Invalid Email Address").val("").focus().blur("");
			    	return false;
				}
			}
		}
		
		/* function to validate password */

		function validate_password(Password,C_password) {

			var b_array = {};

			if(Password === undefined || Password === "") {

				jQuery("input[placeholder='Password']").addClass("red_alert");
			    jQuery("input[placeholder='Password']").attr("placeholder","Password can not be empty").val("").focus().blur("");
			    b_array.first = false;

			} else {

				var Re_password = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;

				if(Re_password.test(Password)) {

					b_array.first = true;
				} else {

					jQuery("input[placeholder='Password']").addClass("red_alert");
			    	jQuery("input[placeholder='Password']").attr("placeholder","Invalid Password").val("").focus().blur("");
			    	b_array.first = false;
				}

		}

		if(C_password === undefined || C_password === "") {

				jQuery("input[placeholder='Confirm Password']").addClass("red_alert");
			    jQuery("input[placeholder='Confirm Password']").attr("placeholder","Password can not be empty").val("").focus().blur("");
			    b_array.second = false;

			} else {

				alert(C_password);
				var Re_password1 = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;

				if(Re_password1.test(C_password)) {

					b_array.second = true;
				} else {

					jQuery("input[placeholder='Confirm Password']").addClass("red_alert");
			    	jQuery("input[placeholder='Confirm Password']").attr("placeholder","Invalid Password").val("").focus().blur("");
			    	b_array.second = false;
				}

		}

		console.log(b_array);
		return b_array;

	}


	/* Verifying FirstName and Employee id */

		function validate_firstname(firstname) {

			var Re_firstname = /^[A-Za-z]{3,8}$/;

			if(Re_firstname.test(firstname)) { return true; } else {

				jQuery("input[placeholder='FirstName']").attr("placeholder","FirstName should be >3 & <8").val("").focus().blur("");
			}

		}


		function validate_employeeid(empid) {

			if(empid === undefined || empid === "") {

				jQuery("input[placeholder='EmployeeID']").addClass("red_alert");
			    jQuery("input[placeholder='EmployeeID']").attr("placeholder","EmployeeID can not be empty").val("").focus().blur("");

			} else {

				var Re_empid = /^[0-9]{6}$/;

				if(Re_empid.test(empid)) {

					return true;
				} else {

					jQuery("input[placeholder='EmployeeID']").addClass("red_alert");
			    	jQuery("input[placeholder='EmployeeID']").attr("placeholder","Invalid EmployeeID").val("").focus().blur("");
			    	return false;
				}

		}

		} 


	});

	var file = document.getElementById("file-upload");
	file.onchange = function() {
	    document.getElementById('fileid').value = file.value.replace("C:\\fakepath\\","");
	};

	


 });

