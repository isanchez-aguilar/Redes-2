const dirTree = require("directory-tree");

function obtenerListado(ruta) {
	const listado = dirTree(`${__dirname}\\nube\\${ruta}`);
	return listado;
}

module.exports = {
	obtenerListado,
};