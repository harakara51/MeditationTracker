onload = function() {
	init();
};

function init() {
	console.log(" inside init");

	var submitDate = document.getElementById("TimeSpendMeditatingOn");

	var alldays = document.getElementById("alldays");
	var singleDay = document.getElementById("singleDay");
	var update = document.getElementById("update");
	var Card1 = document.getElementById("mCard1");
	var Card2 = document.getElementById("mCard2");
	
	alldays.addEventListener("click", function(e) {
		var boolAlldays = "TRUE";
		var method ="GET";
		var urlcode ="meditate";
		console.log(urlcode + "inside init");
		e.preventDefault();
		getData(method,urlcode,allDaysMeditated) ;

	});

	singleDay.addEventListener("click", function(e) {
		var method ="GET";
		var date = document.getElementById("TimeSpendMeditatingOn");
		var urlcode ="date/" +date.value;
		e.preventDefault();
		getData(method,urlcode,findSpecificDayMeditated);

	});
	
	update.addEventListener("click", function(e) {
		
		e.preventDefault();
		createUpdateForm();

	});
	Card1.addEventListener("mouseout", function(e) {
		
		e.preventDefault();
		deleteForm();

	});

	
	Card2.addEventListener("click", function(e) {
	
	e.preventDefault();
	deleteCard2Data();

});
}

function getData(method,url,callback, object) {
	
console.log(url);
	var fullURL ="http://localhost:8080/test/rest/" + url;
	console.log("fullurl inside getData is " +fullURL);
	var xhr = new XMLHttpRequest();
	xhr.open(method, fullURL);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status < 400) {

			callback(JSON.parse(xhr.responseText));
		}
	};
	if (object) {
		console.log("Jus before sendingobject date attribute value :" +object.datemeditated + " time attribute " + object.timemeditated);
        xhr.send(JSON.stringify(object));
    } else {
        xhr.send(null);
    }
}; 


var deleteForm = function () {
	console.log("inside deleteForm");
	var updateJournal = document.getElementById("updateJournal");
	updateJournal.innerHTML ="";
};


var deleteCard2Data= function () {
	console.log("inside deleteCard2Darta");
	var updateJournal = document.getElementById("allDaysContainer");
	updateJournal.innerHTML ="";
	alldays.innerHTML ="Go";
};

function findSpecificDayMeditated(data) {
	printSinlgeDayMeditated(data)

}



function allDaysMeditated(data) {
	printAlldayMeditated(data)
	console.log("inside allDaysMeditated data fuction " + data);
}




