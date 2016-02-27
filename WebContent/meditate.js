onload = function () {
	init();
};

function init() {
	console.log (" inside init");
	// document.getElementById("buttonDiv").addEventListener("click", function(e) {
	// 	e.target.style.backgroundColor = "red";
	// });
var submitDate = document.getElementById("TimeSpendMeditatingOn");
// submitDate.addEventListener("click", function () {

// getData(doStuffwithData);

// });


var alldays = document.getElementById("alldays");

alldays.addEventListener("click", function (e) {
	e.preventDefault();
getData(doStuffwithData);

});
	
}

function getData(callback) {
	console.log ("inside getData function");
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:8080/JSFrontEnd/rest/meditate");
	xhr.onreadystatechange = function () {
		if (typeof callback === "string") {
			console.log(callback);
		} else {
			 callback(JSON.parse(xhr.responseText));
		}
	};
	xhr.send();
}

function doStuffwithData(data) {
	
	var allDaysContainer = document.
	
	console.log("inside doStuffwith data fuction " +data);

}