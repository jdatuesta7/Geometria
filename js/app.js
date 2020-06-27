console.log("hello world");
alert("hola");
document.write("hello");

function procesar(){
	let numero=document.getElementById('txtnumero').value;
	let resultado = 2*parseInt(numero);
	alert("el doble es "+resultado);
	console.log("el doble es "+resultado)
	document.getElementById("res").innerHTML = "El doble es "+resultado;
} 