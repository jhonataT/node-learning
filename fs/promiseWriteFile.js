const { writeFile } = require('fs');

const criarArquivo = (name, content) => {
    return new Promise( (resolve, reject) => {
        writeFile(name, content, err => {
            if(err) return reject(err);
            resolve();
        })
    })
}

criarArquivo('promiseArquivo.txt', "criando arquivo com promises")
.then( () => console.log('Sucess'))
.catch(err => console.log(err));