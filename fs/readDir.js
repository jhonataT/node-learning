const fs = require('fs');
// Ler o diretório e chamar uma cb;
fs.readdir(__dirname, (err, data) => {
    if(err) throw err;
    data.forEach( (files) => {
        console.log(__dirname, '\\', files);
    })
});