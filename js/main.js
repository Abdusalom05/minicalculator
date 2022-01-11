function qosh() {
	let son1 = document.getElementsByClassName('son1')[0].value;
	let son2 = document.getElementsByClassName('son2')[0].value;
	let son3 = son1 * 1 + son2 * 1;
	document.getElementsByClassName('yigindi')[0].innerHTML = son3;

}
function ayir() {
	let son1 = document.getElementsByClassName('son1')[0].value;
	let son2 = document.getElementsByClassName('son2')[0].value;
	let son3 = son1 * 1 - son2 * 1;
	document.getElementsByClassName('yigindi')[0].innerHTML = son3;
}
function kopaytir() {
	let son1 = document.getElementsByClassName('son1')[0].value;
	let son2 = document.getElementsByClassName('son2')[0].value;
	let son3 = son1 * 1 * son2 * 1;
	document.getElementsByClassName('yigindi')[0].innerHTML = son3;

}
function bol() {
	let son1 = document.getElementsByClassName('son1')[0].value;
	let son2 = document.getElementsByClassName('son2')[0].value;
	let son3 = son1 * 1 / son2 * 1;
	document.getElementsByClassName('yigindi')[0].innerHTML = son3;
}