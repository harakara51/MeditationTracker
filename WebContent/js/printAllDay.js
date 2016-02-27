var printAlldayMeditated = function(data) {

	var allDaysContainer = document.getElementById("allDaysContainer");

	var table = document.createElement("table");

	var tableThead = document.createElement("thead");
	var tableTheadrow = document.createElement("tr");

	allDaysContainer.appendChild(table);
	table.appendChild(tableThead);
	table.appendChild(tableTheadrow);

	var th = document.createElement("th");
	th.innerHTML = "Date";
	tableTheadrow.appendChild(th);

	var th1 = document.createElement("th");
	th1.innerHTML = "Time (minutes)";
	tableTheadrow.appendChild(th1);
	var tableTheadrow = document.createElement("tr");

	for (i = 0; i < data.length; i++) {
		var tablerow2 = document.createElement("tr");
		var cell1 = document.createElement("td");
		var cell2 = document.createElement("td");
		table.appendChild(tablerow2);
		tablerow2.appendChild(cell1);
		tablerow2.appendChild(cell2);

		cell1.innerHTML = data[i].date
		cell2.innerHTML = data[i].time;


	}
//	var btnalldays = document.getElementById("alldays");
	alldays.innerHTML ="Hide";

	alldays.innerHTML ="Hide";
	alldays.removeEventListener();
	alldays.addEventListener("click", function(e) {
		e.preventDefault();
		deleteCard2Data();

	});
	
	 
}