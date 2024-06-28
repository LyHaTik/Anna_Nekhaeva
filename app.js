let ig = window.Instagram.WebApp;

ig.expand();

let params = (new URL(document.location)).searchParams;
console.log(params.get("fcbsid");

let btnclose = document.getElementById("btn3");

btnclose.addEventListener("click", function(){
	document.getElementById("main").close;
});
