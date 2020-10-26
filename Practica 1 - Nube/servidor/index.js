#!/usr/bin/env node
const SocketServidor = require('./SocketServidor');

const servidor = new SocketServidor(1234);

servidor.iniciar();