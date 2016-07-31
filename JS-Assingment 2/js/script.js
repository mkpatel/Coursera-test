/*for Inputs (textbox) available into the html pages Validations are not performed ---- */
/*--------------------------- Functions for behaviours are defined after the excersices part completed-- */

/* ---------------------------------------- 1. Object Excersice ---------------------- */

// ------------- 1st Question-------------
var animal = {};

// ----------------- 2nd Question -------------

animal.username = 'Parrot';

//console.log(animal.username);


animal["tagline"] = "Green" ;
//console.log(animal["tagline"]); 

// ------------ OR --------------

/* var tag = "tagline";

animal[tag] = "Love Photography";

console.log(animal[tag]); */


// ------------------3rd Question -------------

var noises = [];

animal.noises = noises;

//console.log(noises);

var counter = 0;

for(var prop in animal)
{
	
	if (prop == 'username' ) {

		console.log("Hi My Name is " + animal[prop]);

 		// Return Statement ( IT will throught an error Illegal Return Statement)

		//return "Hi My Name is" + animal[prop]; 

	} else if (prop == 'tagline') {

		console.log("I like to say " + animal[prop]);
	}
	counter++;
}

console.log("Number of Properties into the Object are  "+ counter);


/* ---------------------------------------- Array Excersice ---------------------- */


var noiseArray = ["Thermal Noise"];  //  Question -1 


noiseArray.unshift("Shot Noise");   // Question -2 (I)
noiseArray.push("Flickr Noise");    // Question - 3 (II)

noiseArray[noiseArray.length - 1] = "Burst Noise"; //Question-4

console.log(noiseArray);

console.log("Array Length =" + noiseArray.length);  // Question -5 

console.log("Last Index of Array is  " + (noiseArray.length - 1) ); // Question -6

//Relation Between Last index and Length is 

// Length of the Array = Array's Last Index + 1 ;

animal.noises = noiseArray;

//console.log(animal);



/* ---------------------------------------- Array-Collection Excersice ---------------------- */


var animals = [];  //  Creating an Array of Objects of type animal

animals.unshift(animal);  // Inserting Animal into the Animals


// Creating Object Quackers and add it to the animals

var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yuppie!',
	noises: ['quack','honk','sneez','growl']
}; 


animals.push(quackers);

//console.log(animals);


var createAnimalObj = function (Username,Tag,Noises) {

	var temp = {

				username: Username,
				tagline: Tag,
				noises: Noises
			};

	//console.log(temp);
	return temp;

}; /* function for Creating an Object takes an argument creat an object and returns object itself*/


/* -- Function for SHowing Animal Information on the Div tag ----------- */

function GetAnimalInfo() {

	document.getElementById("content").innerHTML = "";
	document.getElementById("content").innerHTML += "<h4 class='title'>Animal Information</h4>";
	
	for(var prop in animal)
	{
		
		document.getElementById("content").innerHTML += "<p> <b>"+ prop + "</b>:  " + animal[prop] + "</p>";
	}
	
}

/* -- Function for setting the value of noise into the NoiseArray ----------- */

function SetAnimalNoise() {

	var noise_value = document.getElementById("value_noise").value;
	noiseArray.push(noise_value);
	GetAnimalInfo();
}

/* -- Function for SHowing Animals-(collection of arrays) Information on the Div tag ----------- */

function DisplayAnimalsInfo() {

	document.getElementById("Animals_info").innerHTML = "";
	document.getElementById("Animals_info").innerHTML += "<h4 class='title'>Animals Information</h4>";
	

	for(var prop in animals)
	{
		document.getElementById("Animals_info").innerHTML += "<span> </span>";
		for (var name in animals[prop])
		{
			document.getElementById("Animals_info").innerHTML += "<p> <b>"+ name + "</b>:  " + animals[prop][name] + "</p>";
			
		} 
		
	}
}

/* Function for Creating the object of animal type and assign it to the animals collection. -- */

function SetAnimalObject() {

	var uname = document.getElementById("value_n").value;
	var tname = document.getElementById("value_t").value;
	var nois = document.getElementById("value_ns").value.split(",");

	var temp =  createAnimalObj(uname , tname , nois);	
	
	animals.push(temp);

	console.log(animals);

	DisplayAnimalsInfo();
}

