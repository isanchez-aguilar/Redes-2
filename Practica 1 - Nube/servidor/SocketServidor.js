const io = require('socket.io')(1234);

const ManejadorPeticiones = require('./ManejadorPeticiones');

function estaPermitidoAcceso(origen) {
	console.log(`Origen: ${origen}`);
	return true;
}

module.exports = class SocketServidor {
	constructor(puerto) {
		this.puerto = puerto;
	}

	iniciar() {		
		io.on('connection', socket => {
			console.log(`${new Date()} - Usuario conectado`);

			socket.on('listar', ruta => {
				const lista = ManejadorPeticiones.obtenerListado(ruta);
				io.emit('listar', lista);
			});

			socket.on('disconnect', () => {
				console.log(`${new Date()} - Usuario desconectado`);
			});
		});
	}
};