var createUpdateForm = function () {
	var updateJournal = document.getElementById("updateJournal");
	var form= document.createElement("form")
	form.setAttribute("id", "updateFrom");
	form.setAttribute("name", "updateFrom");
	form.setAttribute("Tag", "updateformdata");
	
	
	console.log("number of child ioutsied form : " +form.getElementsByTagName('*').length)

//	if(updateJournal.getElementsByTagName('*').length < 2) {
//		console.log("number of child inside form : " +form.getElementsByTagName('updateformdata').length)
	var inputdate = document.createElement("input");
	inputdate.setAttribute("type", "date");
	inputdate.setAttribute("id", "datemeditated");
	inputdate.setAttribute("name", "datemeditated");
	inputdate.setAttribute("Tag", "updateformdata");
	
	var inpuTime = document.createElement("input");
	inpuTime.setAttribute("type", "number");
	inpuTime.setAttribute("id", "timemeditated");
	inpuTime.setAttribute("name", "timemeditated");
	inpuTime.setAttribute("Tag", "updateformdata");
	var inputdate2 = document.createElement("input");
	var button = document.createElement("button");
	button.setAttribute("class", "btn waves-effect waves-light purple lighten-1");
	button.setAttribute("type", "submit");
	button.innerHTML = "GO";
	form.appendChild(inputdate);
	form.appendChild(inpuTime);
	form.appendChild(button);
	updateJournal.appendChild(form);
	
button.addEventListener("click", function(e) {
		
	e.preventDefault();
	console.log("inside eventListner anonymous function");
	var meditate = {};
	meditate.datemeditated = inputdate.value;
	meditate.timemeditated =inpuTime.value;
	var method ="POST";
	var urlcode ="newLog";
	
	console.log("inside eventlistener which is inside created form and value is :" + meditate.datemeditated);
	
	
	console.log(urlcode + "inside init");
	e.preventDefault();
	getData(method,urlcode,callback, meditate);

	});
	
};


var callback = function (data) {
	
console.log("inside callback method of post");
	
}