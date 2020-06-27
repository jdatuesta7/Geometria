const opc = document.getElementById('select'),
res1 = document.getElementById('res1'),

opc.addEventListener('change', proceso(), false);

function proceso(){

	let base = document.getElementById('base').value;
	let altura = document.getElementById('altura').value;
	let cm2 = document.getElementById('cm2').checked;
	let m2 = document.getElementById('m2').checked;
	
	if (opc.value == 1) {//cuadrado
		if (m2) {
			let area = base*altura;
			res1.innerHTML = '<h4>Cuadrado: '+ area + ' m2</h4>'
			}else{
				let area = (base*altura)*10000;
				res1.innerHTML = '<h4>Cuadrado: '+ area + ' cm2</h4>';
			}

	}else if(opc.value == 2){//triangulo
		if (m2) {
			let area = (base*altura)/2;
			res1.innerHTML = '<h4>Triangulo: '+ area + ' m2</h4>'
		}else{
			let area = ((base*altura)/2)*10000;
			res1.innerHTML = '<h4>Triangulo: '+ area + ' m2</h4>'
		}
}
}