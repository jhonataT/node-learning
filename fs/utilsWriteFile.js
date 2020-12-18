const { promisify } = require('util');

const writeFile = promisify(require('fs').writeFile); // carregar o fs para utilizar promises.
const text = 'Criando um arquivo utilizando promisify do módulo nativo util';

writeFile('utilArquivo.txt', text)
.then( () => {
    console.log('Sucess');
})
.catch( err => {
    console.log(err);
})