'use strict';
//alert('Salud');
//prompt('Ingrese un dato');
//confirm('Está seguro?');

/*
document.addEventListener('DOMContentLoaded', function (e) {

	// aqui va todo el codigo de programacion del sitio/app

	var boton = document.querySelector('#btn-calcular');

	boton.addEventListener('click', function () {
		// Guardar controles del form en variables
		var cliente = document.querySelector('#txt-cliente');
		var monto = document.querySelector('#txt-monto');
		var tasa = document.querySelector('#txt-tasa');
		var plazo = document.querySelector('#txt-plazo');

		// realizar las validaciones de los textBoxes

		// c = (m * r) / (1 - Math.pow(1 + r, -n))
		var m = parseFloat(monto.value);
		var r = parseFloat(tasa.value) / 100 / 12;
		var n = parseInt(plazo.value) * 12;

		var c = (m * r) / (1 - Math.pow(1 + r, -n));
		var pt = c * n;
		var it = pt - m;

		var body = document.querySelector('#tdata');

		var fila = body.insertRow();

		fila.insertCell().innerHTML = cliente.value;
		fila.insertCell().innerHTML = m.toLocaleString();
		fila.insertCell().innerHTML = `${tasa.value}%`;
		fila.insertCell().innerHTML = plazo.value;
		fila.insertCell().innerHTML = c.toFixed(2).toLocaleString(null, );
		fila.insertCell().innerHTML = it.toFixed(2).toLocaleString();
		fila.insertCell().innerHTML = pt.toFixed(2).toLocaleString();
		
	})
})
*/

$(function () {

	$('#btn-calcular').on('click', function () {
		var cliente = $('#txt-cliente').val()
		var monto 	= $('#txt-monto').val()
		var tasa 	= $('#txt-tasa').val()
		var plazo 	= $('#txt-plazo').val()

		var m = parseFloat(monto);
		var r = parseFloat(tasa) / 100 / 12;
		var n = parseInt(plazo) * 12;

		var c = (m * r) / (1 - Math.pow(1 + r, -n));
		var pt = c * n;
		var it = pt - m;

		var fila = `
			<tr>
				<td>${cliente}</td>
				<td>${monto}</td>
				<td>${tasa}%</td>
				<td>${plazo} años</td>
				<td>${c.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
				<td>${it.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
				<td>${pt.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
			</tr>
		`;

		$('#tdata').append(fila);
	})

})


















