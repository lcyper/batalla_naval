// JavaScript Document
//tablas
//barquitos
//agua
//tamano=Number(prompt("ancho del tablero:",""));
//var tamano=10;
var ancho_mapa= new Array(1,2,3,4,5,6,7,8,9,10);
//var ancho_mapa_b= new Array(10);
var alto_mapa= new Array('a','b','c','d','e','f','g','h','i','j');
//var alto_mapa_b= new Array(10)
// esto recorre la tabla hay que darle buen uso
var tablero= new Array(), c;
for (var i = 0; i < ancho_mapa.length; i++){
	for (var d = 0; d < alto_mapa.length; d++) 
	{ayb=alto_mapa[i]+ancho_mapa[d];
	tablero[ayb]=0;}
}

function mapa(a,b){
for (var i = 0; i < ancho_mapa.length; i++)
 {
	for (var d = 0; d < alto_mapa.length; d++) 
	{
		//console.log(alto_mapa[i]+ancho_mapa[d]);
		ayb=alto_mapa[i]+ancho_mapa[d];
		console.log(ayb);
		if (tablero[ayb]!=1) {tablero[ayb]=0;}
		if (a==reset) {tablero[ayb]=0;
			document.getElementById(ayb).style.background='#10A7FC';
		}
		if (a=='jugar') {
			document.getElementById(ayb).style.background='#10A7FC';
			if (tablero[ayb]==1) {tablero[ayb]=2;};
		}
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
//var id='';
function toque(a,b){
c=a+b;
document.getElementById(c).style.backgroundColor='#524D4D';
	if (tablero[c]==0) {tablero[c]=1;
			//document.getElementById(c).style.background='#EB1515';
		}else if (tablero[c]==1) {tablero[c]=0; 
		document.getElementById(c).style.background='#10A7FC';
	document.getElementById(c).style.background='#EB1515';}
	else if (tablero[c]==2){  
		document.getElementById(c).style.background='#1C2BD5';}
	console.log(c);
	console.log(tablero[c]);
}

function reset(){}

function barcos(){
	addEvent
}

function go(){ 
	mapa('jugar')
	/*if (tablero[c]==1) {
			tablero[c]=2;
			console.log(tablero[c]);}*/
		}
	
	

//tocado