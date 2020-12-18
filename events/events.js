const EventEmitter = require('events');

// Tirar uma "cópia" dos métodos de EventEmitter para a classe Evento.
class Evento extends EventEmitter {}

const meuEvento = new Evento();

// .on Para criar. 
meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento 'seguranca': ${x}, ${y}`);
});
// Emitir o evento:
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');

/*
A diferença de Event para Promise seria, basicamente, que o Event irá ficar executando, logo, vc conseguirá chamá-lo quantas vezes precisar. Já a Promise, depois de executar e resolver, ela encerra.







*/
