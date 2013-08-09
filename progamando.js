// JavaScript Document

//tablas

//barquitos

//agua
//tamano=Number(prompt("ancho del tablero:",""));
var tamano=10;
var ancho_mapa= new Array(1,2,3,4,5,6,7,8,9,10);
//var ancho_mapa_b= new Array(10);
var alto_mapa= new Array('a','b','c','d','e','f','g','h','i','j');
//var alto_mapa_b= new Array(10)

// esto recorre la tabla hay que darle buen uso
function reset(a,b){
var tablero= new Array();
for (var i = 0; i < ancho_mapa.length; i++)
 {
	for (var d = 0; d < alto_mapa.length; d++) 
	{
		//console.log(alto_mapa[i]+ancho_mapa[d])
		ayb=alto_mapa[i]+ancho_mapa[d];
		tablero[ayb]=0;
		console.log(tablero[ayb])
		}
	}
};

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
document.getElementById(c).style.backgroundColor="red";
//console.log(c);
//console.log(tablero[c]);
if (tablero[c]==1) {
		document.getElementById(c).style.backgroundColor="black";
	};
tablero[c]=1;
}

//tocado
