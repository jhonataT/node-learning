const fs = require('fs');

fs.readFile('text.txt', (err, data) => {
    if(err) throw err;
    //Retorna um buffer (espaço que armazena informações antes de decidir oq fazer com elas) em binário.
    // console.log(data.toString());
});

//////////////////////////////////////////

// De forma blocking, vai ler o arquivo inteiro para só depois continuar.
const text = fs.readFileSync('text.txt');

console.log(`TEXT = ${text}`);