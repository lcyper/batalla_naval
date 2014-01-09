var tablero= new Array(),
	ancho_mapa= new Array(1,2,3,4,5,6,7,8,9,10),
	alto_mapa= new Array('a','b','c','d','e','f','g','h','i','j');
// esto recorre la tabla hay que darle buen uso
function recorer(hacer) {
	for (var i=0, g=0; i < ancho_mapa.length; i++){
		for (var d = 0; d < alto_mapa.length; d++) {
			ayb=alto_mapa[i]+ancho_mapa[d];
			if (hacer==reset) {
				tablero[ayb]={estado:"agua"};
				document.getElementById(ayb).style.background='#10A7FC';
				// console.log("reseteado");
			}else 
			if (hacer=='ganar') {
				if (tablero[ayb].estado=='hundido' || tablero[ayb].estado=='agua') {
							g++
				};
				if (g==100) {
					alert('Ganaste!!!')
				};
			}else
			if (hacer==trampa) {
				if (tablero[ayb].estado=='barco') {
					document.getElementById(ayb).style.background='#E4DADA';
				};
			};
		};
	};
	if (hacer==reset) {
	auto_barcos(2);
	auto_barcos(2);
	auto_barcos(3);
	auto_barcos(4);
	};
};
recorer(reset)

//cual seria el array donde estan las celdas de un barco.
function crear_barcos (cual) {
	for (var i = 0; i < cual.length; i++) {
		var c = cual[i];
			tablero[c].a=cual,
			tablero[c].estado='barco';
	};
	console.log('Barco en: '+cual)
} 
// crear_barcos(["a1","a2","a3"])
//creacion de barcos automaticamente.
function auto_barcos (largo) {
	var alto= parseInt((Math.random()*10)),
		ancho=parseInt((Math.random()*10)),
		num3=parseInt((Math.random()*10)),
		celda;
	//esto es para darle dinanismo a la creacion de los barcos
	if (num3<=5) { horizontal() }else{ vertical() };
	function horizontal () {
		if (ancho+largo>=10) {ancho=10-largo;};
		var num_anterior=ancho-1, num_despues=ancho+largo;
		var despues=alto_mapa[alto]+ancho_mapa[num_despues];
	// console.log(alto_mapa[alto]+ancho_mapa[num_anterior]);
		// if (tablero[alto_mapa[alto]+ancho_mapa[num_anterior]].estado=='barco') { auto_barcos(largo); }; //esto hace q el barco este  rodeado x agua.
	// console.log(alto_mapa[alto]+ancho_mapa[num_despues]+', '+tablero[alto_mapa[alto]+ancho_mapa[num_despues]]);
		celda=[alto_mapa[alto]+ancho_mapa[ancho++]];
		for (var i = 1; i < largo; i++) {
			celda.push(alto_mapa[alto]+ancho_mapa[ancho++]);
		};
	}
	function vertical () {
		if (alto+largo>=10) {alto=10-largo;};
		celda=[alto_mapa[alto++]+ancho_mapa[ancho]];
		for (var i = 1; i < largo; i++) {
			celda.push(alto_mapa[alto++]+ancho_mapa[ancho]);
		};
	}
	//esta hace que no aya un barco arriba de otro
	var v=0;
	for (var i = 0; i < celda.length; i++) {
		if (tablero[celda[i]].estado=='agua') {v++};
	};
	if (v==celda.length) {
		crear_barcos(celda);
	}else{
		auto_barcos(celda.length)
	}
		
}

// crear_barcos(mas = new Array("a1","a2","a3"))
// tablero.a1.estado='barco';
// tablero.a1.a= mas = new Array(a1,a2,a3);

$('table tr td').click( function() {
	var id = this.id;
	console.log(id +" "+ tablero[id].estado)
	if (tablero[id].estado=='agua'){
		document.getElementById(id).style.background='#158DD1'; //cambiar x agregar una clase.
		console.log("aca solo hay agua")
	}
	else if (tablero[id].estado=='barco') {
		tablero[id].estado='tocado'
		document.getElementById(id).style.background='#F85353'; //cambiar x agregar una clase.
		console.log("-barco: me tocaste!")
		var hundidos=0;
		for (var i = 0; i < tablero[id].a.length; i++) {
			var b= tablero[id].a[i];
			// console.log(b+' '+tablero[b].estado)
			if (tablero[b].estado=='tocado') {
				hundidos++;
				// console.log(b+' fui tocado '+hundidos)
				if (hundidos==tablero[id].a.length) { //todo el barco se hundio.
				console.log('barco hundido')
					for (var i = 0; i < tablero[id].a.length; i++) {
						var b= tablero[id].a[i];
						tablero[b].estado='hundido';
						document.getElementById(b).style.background='#000';
					};
				recorer('ganar') 
				}
			};

		};
	};
});


$("#reset").on('click', function(event) {
	event.preventDefault();
	recorer(reset);
});
$("#reglas").click( reglas() );
$("#trampa").on('click', function(event) {
	event.preventDefault();
	recorer(trampa);
});
function reglas (argument) {
	// body...
}