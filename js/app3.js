const opc = document.getElementById('selector'),
	res1 = document.getElementById('res1'),
	res2 = document.getElementById('res2');



function proceso() {
	
	if (opc) {
		opc.addEventListener('change', proceso());
		console.log("nice opc")
	}else{
		console.log("bad opc")
	}

	let base = document.getElementById('base').value,
		altura = document.getElementById('altura').value,
		m2 = document.getElementById('m2').checked

	if (opc.value == 1) {//cuadrado
		if (m2) {
			let area = base * altura;
			res1.innerHTML = '<h4>Cuadrado: ' + area + ' m2</h4>'
		} else {
			let area = (base * altura) * 10000;
			res1.innerHTML = '<h4>Cuadrado: ' + area + ' cm2</h4>';
		}

	} else if (opc.value == 2) {//triangulo
		let area = base * altura;
		area = area / 2;
		if (m2) {
			document.write("el area es " + area + " m2");
		} else {
			document.write("el area es " + (area * 10000) + " cm2");
		}
	}
}

function borrar(){
	
}
