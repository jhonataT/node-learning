// unlink => permite excluir um arquivo;

const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
    if(err) throw err;
    console.log(data); 
    // O buffer não vai corresponder ao arquivo total.
}); // (Non Blocking);

fs.unlinkSync("file.txt"); // Apagar de forma sincrona, antes de terminar o processo anterior (Blocking).