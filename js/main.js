var menu = document.querySelector("aside");
var btnMenu = document.querySelector("#btnMenu");
var content= document.querySelector("#content");
btnMenu.addEventListener('click',function(){
	menu.classList.toggle('mostrar-menu');
	content.classList.toggle('mover-content');
},false)
