console.log(`Nome do Arquivo: ${__filename}`);

console.log(`Diretório do Arquivo: ${__dirname}`);
console.log(`Diretório em que foi invocado: ${process.cwd()}`);
/*
    Diferença entre __dirname e process.cwd():
    process.cwd() sempre vai processar de onde está chamando o arquivo;
    __dirname sempre vai executar/ mostrar a origem do arquivo.
*/
console.log(`Parâmetros de execução: ${process.argv}`);
console.log(`Ambiente do Servidor: ${process.platform}`);
console.log(`Usuário no SO: ${process.env.USERNAME}`);
console.log(`Sistema Operacional: ${process.env.OS}`);
console.log(`Idioma: ${process.env.LANG}`);
console.log(`Nome do server: ${process.env.COMPUTERNAME}`);