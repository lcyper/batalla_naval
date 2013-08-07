// JavaScript Document

//tablas

//barquitos

//agua
//tamano=Number(prompt("ancho del tablero:",""));
var tamano=10;
var ancho_mapa= new Array(1,2,3,4,5,6,7,8,9,10);
var alto_mapa= new Array('a','b','c','d','e','f','g','h','i','j');
/*
for (var i = 0; i < ancho_mapa.length; i++) {
	 console.log(ancho_mapa[i])
};
 for (var i = 0; i < alto_mapa.length; i++) {
	 console.log(alto_mapa[i])
};
*/
function toque(a,b){
c=a+b;

console.log(c)
//alert(c);
document.getElementById(c).style.backgroundColor="red";
}

//tocado
