var messagelog = document.getElementById('messagelog');
var currentCursor = "look";
var playerLocation = "bed";
var totalActions = 0;

function initiate(begining = "") {
	console.log("initiate");
	messagelog.innerHTML = begining;
	display(opening);
}
function resetGame(ending = "") {
	console.log("resetting game");
	totalActions = 0;
	messages = document.getElementsByTagName("P");
	var i;
	for (i = 0; i < messages.length; i++) {
		messages[i].style.animation = "fadeout 2s";
		messages[i].style.opacity = 0;
		console.log("fade out " + i);
	}
	console.log("display ending");
	display(ending);
	setTimeout(function() { initiate(ending); }, 2000);
}
function c(noun) {
	switch(currentCursor) {
		case "look":
			if (noun == "room") display(lookRoom);
			if (noun == "bed") display(lookBed);
			break;
		case "grab":
			if (noun == "room") display(grabRoom);
			if (noun == "bed") display(grabBed);
			break;
		case "open":
			if (noun == "room") display(openRoom);
			if (noun == "bed") display(openBed);
			break;
		case "talk":
			if (noun == "room") display(talkRoom);
			if (noun == "bed") display(talkBed);
			break;
		case "move":
			movePlayer(noun);
	}
	totalActions ++;
	console.log(totalActions);
	if (totalActions >= 100) {
		resetGame(exaustion);
	}
}
function movePlayer(noun) {
	if (playerLocation == "room") {
		if (noun == "bed") { display(moveRoomBed); playerLocation = "bed"; }
		if (noun == "room") { display(moveRoomRoom); playerLocation = "room"; }
		if (noun == "window") { display(moveRoomWindow); playerLocation = "window"; }
		if (noun == "dresser") { display(moveRoomDresser); playerLocation = "dresser"; }
		if (noun == "door") { display(moveRoomDoor); playerLocation = "door"; }
	} else if (playerLocation == "bed") {
		if (noun == "bed") { display(moveBedBed); playerLocation = "bed"; }
		if (noun == "room") { display(moveBedRoom); playerLocation = "room"; }
		if (noun == "window") { display(moveBedWindow); playerLocation = "window"; }
		if (noun == "dresser") { display(moveBedDresser); playerLocation = "dresser"; }
		if (noun == "door") { display(moveBedDoor); playerLocation = "door"; }
	}
}

function display(textBlock) {
	messagelog.innerHTML += textBlock;
	messagelog.scrollTop = messagelog.scrollHeight;
}
function btnClick(btnId) {
	console.log(btnId);
	document.getElementById('btnLook').style.display = (btnId == "btnLook" || btnId == "btnLookDown") ? "none" : "initial";
	document.getElementById('btnGrab').style.display = (btnId == "btnGrab" || btnId == "btnGrabDown") ? "none" : "initial";
	document.getElementById('btnOpen').style.display = (btnId == "btnOpen" || btnId == "btnOpenDown") ? "none" : "initial";
	document.getElementById('btnTalk').style.display = (btnId == "btnTalk" || btnId == "btnTalkDown") ? "none" : "initial";
	document.getElementById('btnMove').style.display = (btnId == "btnMove" || btnId == "btnMoveDown") ? "none" : "initial";
	if (btnId == "btnLook") { 
		document.body.style.cursor = "url('images/pataLookCur.png'), auto";
		currentCursor = "look";
	}
	if (btnId == "btnGrab") { 
		document.body.style.cursor = "url('images/pataGrabCur.png'), auto";
		currentCursor = "grab";
	}
	if (btnId == "btnOpen") {
		document.body.style.cursor = "url('images/pataOpenCur.png'), auto";	
		currentCursor = "open";
	}
	if (btnId == "btnTalk") {
		document.body.style.cursor = "url('images/pataTalkCur.png'), auto";
		currentCursor = "talk";
	}
	if (btnId == "btnMove") {
		document.body.style.cursor = "url('images/pataMoveCur.png'), auto";
		currentCursor = "move";
	}
}
