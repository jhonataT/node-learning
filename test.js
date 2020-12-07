// Lib de criptografia:
const crypto = require('crypto');
const start = Date.now();

function logHashTime() {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
        console.log(`Hash: ${Date.now() - start}`);
        console.log();
    })
}

// Executando no thread pull:
logHashTime();
logHashTime();
logHashTime();
logHashTime();

logHashTime();
// O quinto levará muito mais tempo para executar, pois ele teve que esperar o primeiro hash liberar para poder utilizar a sequência.
