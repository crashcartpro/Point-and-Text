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
function btnClick(btnId) {
	document.getElementById('btnLook').style.display = (btnId == "btnLook") ? "none" : "initial";
	document.getElementById('btnGrab').style.display = (btnId == "btnGrab") ? "none" : "initial";
	document.getElementById('btnOpen').style.display = (btnId == "btnOpen") ? "none" : "initial";
	document.getElementById('btnTalk').style.display = (btnId == "btnTalk") ? "none" : "initial";
	document.getElementById('btnMove').style.display = (btnId == "btnMove") ? "none" : "initial";
	if (btnId == "btnLook") document.body.style.cursor = "url('images/pataLookCur.png'), auto";
	if (btnId == "btnGrab") document.body.style.cursor = "url('images/pataGrabCur.png'), auto";
	if (btnId == "btnOpen") document.body.style.cursor = "url('images/pataOpenCur.png'), auto";	
	if (btnId == "btnTalk") document.body.style.cursor = "url('images/pataTalkCur.png'), auto";
	if (btnId == "btnMove") document.body.style.cursor = "url('images/pataMoveCur.png'), auto";
}
