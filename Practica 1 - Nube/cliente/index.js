#!/usr/bin/env node
const puerto = 1234;
const socket = require('socket.io-client')(`http://localhost:${puerto}`);

socket.emit('listar', '');

socket.on('listar', mensaje => {
	const listado = mensaje.children;

	listado.forEach(elemento => {
		console.log(elemento.name, elemento.type);
	});
});