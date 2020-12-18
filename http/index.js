const http = require('http');

const hostname = '127.0.0.1'; // ip local;
const port = 3000; // porta padrão;
const url = `http://${hostname}:${port}`;

// criando o servidor:
const server = http.createServer( (req, res) => {
    // req -> tudo que o usuário está solicitando ao servidor.
    // res -> tudo que o servidor vai devolver para o user.

    res.statusCode = 200; // encerrou com sucesso;
    // res.statusCode = 500; -> erro no servidor;
    // res.statusCode = 206; -> algo que ainda está sendo enviado, exemplo: streaming de vídeo;

    res.setHeader('Content-Type', 'text/html') // ler um texto e interpretar como html;
    res.end('<h1>WELCOME<br>NODEJS</h1>');
});

// 'escutar' na porta 3000, no servidor hostname:
server.listen(port, hostname, () => {
    console.log(`server rodando em ${url}`);
});

// Assim que executar o script, abrir o browser:
const open = (process.platform == 'darwin' ? 'open' : 
process.platform == 'win32' ? 'start' : 'xdg-open');

require('child_process').exec(open + ' ' + url); // executa na linha de comando