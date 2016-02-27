<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
<title>Meditation Journal</title> ​
<!-- CSS  -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<link href="css/materialize.css" type="text/css" rel="stylesheet"
	media="screen,projection" />
<link href="css/style.css" type="text/css" rel="stylesheet"
	media="screen,projection" />
</head>
<body>
	<div class="card purple lighten-5" id="mCard1">
		<div class="card-content teal-text">
			<form action="rest/meditate" method="get">
				<span class="card-title" id="cardTitle">Find Time Meditated
					on </span> <input type="date" name="TimeSpendMeditatingOn"
					id="TimeSpendMeditatingOn" placeholder=" ">
				<button class="btn waves-effect waves-light purple lighten-1"
					type="submit" id="singleDay">
					Submit <i class="material-icons right">send</i>
				</button>
				<div id="singleDayContainer"></div>
			</form>

			<form action="rest/meditate" name="updateJournalForm" method="get">
				<button class="btn waves-effect waves-light purple lighten-1"
					type="submit" id="update">Update Journal</button>
				<div id="updateJournal"></div>
			</form>
		</div>
	</div>
	<div class="card purple lighten-5" id="mCard2">

		<div class="card-content teal-text">

			<form action="rest/meditate" method="get" name ="card2Form">
				<span class="card-title" id="cardTitle">Find days meditated
					on</span>

				<button class="btn waves-effect waves-light purple lighten-1"
					type="submit" id="alldays">
					Go <i class="material-icons right">send</i>
				</button>
				<div id="allDaysContainer"></div>
			</form>
		</div>
	</div>

	<script type="text/javascript" src='js/cssInJs.js'></script>
	​
	<script type="text/javascript" src='js/updateForm.js'></script>
	<script type="text/javascript" src='js/printSingleDay.js'></script>
	<script type="text/javascript" src='js/printAllDay.js'></script>
	<script type="text/javascript" src='js/meditate.js'></script>

</body>
<footer> </footer>