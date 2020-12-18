const fs = require('fs');
const assets = ['style', 'script', 'images', 'fonts', 'lib'];

const make  = dir => {
    dir.forEach(path => {
        fs.mkdir(`projeto/assets/${path}`, { recursive: true }, (err) => {
            if(err) throw err;
            console.log('Diretório criado com sucesso!');
        });
    });
}

make(assets);