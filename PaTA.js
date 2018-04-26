var messagelog = document.getElementById('messagelog');
var opening = '<p>You wake in an unfamilure <a onclick="c(\'nBed\')">bed</a> in a dimly lit <a onclick="c(\'nRoom\')">room</a>.</p>'
var LookBed = '<p>The bed is an ornate four poster. The sheets are of a fine linen, if a bit old.</p>'
var LookRoom = '<p>You look around the room. It is dimly lit by moonlight though the window. There is a door oposite window, and a dresser on the wall oposite the <a onclick="c(\'nBed\')">bed</a>.</p>'

function initiate() {
	display(opening);
}
function c(noun) {
	switch(noun) {
		case "nBed":
			display(LookBed);
			break;
		case "nRoom":
			display(LookRoom);
	}
}
function display(textBlock) {
	messagelog.innerHTML += textBlock;
	messagelog.scrollTop = messagelog.scrollHeight;
}
function clickMove() {
	document.getElementById('btnMove').src="images/pataMoveDown.png";
	document.getElementById('btnLook').src="images/pataLook.png";
	document.getElementById('btnGrab').src="images/pataGrab.png";
	document.getElementById('btnTalk').src="images/pataTalk.png";
	document.getElementById('btnOpen').src="images/pataOpen.png";
	document.body.style.cursor = "url('images/pataMoveCur.png'), auto";
}
function clickLook() {
	document.getElementById('btnMove').src="images/pataMove.png";
	document.getElementById('btnLook').src="images/pataLookDown.png";
	document.getElementById('btnGrab').src="images/pataGrab.png";
	document.getElementById('btnTalk').src="images/pataTalk.png";
	document.getElementById('btnOpen').src="images/pataOpen.png";
	document.body.style.cursor = "url('images/pataLookCur.png'), auto";
}
function clickGrab() {
	document.getElementById('btnMove').src="images/pataMove.png";
	document.getElementById('btnLook').src="images/pataLook.png";
	document.getElementById('btnGrab').src="images/pataGrabDown.png";
	document.getElementById('btnTalk').src="images/pataTalk.png";
	document.getElementById('btnOpen').src="images/pataOpen.png";
	document.body.style.cursor = "url('images/pataGrabCur.png'), auto";
}
function clickTalk() {
	document.getElementById('btnMove').src="images/pataMove.png";
	document.getElementById('btnLook').src="images/pataLook.png";
	document.getElementById('btnGrab').src="images/pataGrab.png";
	document.getElementById('btnTalk').src="images/pataTalkDown.png";
	document.getElementById('btnOpen').src="images/pataOpen.png";
	document.body.style.cursor = "url('images/pataTalkCur.png'), auto";
}
function clickOpen() {
	document.getElementById('btnMove').src="images/pataMove.png";
	document.getElementById('btnLook').src="images/pataLook.png";
	document.getElementById('btnGrab').src="images/pataGrab.png";
	document.getElementById('btnTalk').src="images/pataTalk.png";
	document.getElementById('btnOpen').src="images/pataOpenDown.png";
	document.body.style.cursor = "url('images/pataOpenCur.png'), auto";
}
