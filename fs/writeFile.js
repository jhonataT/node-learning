const { writeFile } = require('fs');

writeFile('file.txt', 'Criando arquivo text com writeFile', err => {
    if(err) throw err;
    console.log('Arquivo criado com sucesso!');
});