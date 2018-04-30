var messagelog = document.getElementById('messagelog');
var currentCursor = "look";
var playerLocation = "bed";

function initiate() {
	display(opening);
}
function c(noun) {
	switch(currentCursor) {
		case "look":
			if (noun == "room") display(lookRoom);
			if (noun == "bed") display(lookBed);
			break;
		case "grab":
			if (noun == "room") display(grabRoom);
			break;
		case "open":
			if (noun == "room") display(openRoom);
			break;
		case "talk":
			if (noun == "room") display(talkRoom);
			break;
		case "move":
			if (noun == "room") display(moveRoom);
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
