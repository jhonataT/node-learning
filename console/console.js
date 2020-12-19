console.log("Exibir uma mensagem no console!");
///////////////////////////////////////////////////////////////////////////
// console.error(new Error('Exibindo mensagem de erro, temos problemas!')); // Mostrar uma mensagem de erro e parar o programa!
///////////////////////////////////////////////////////////////////////////
const carros = ['GM', 'FIAT', 'GOL', 'HONDA'];
console.table(carros); // Mostra o array em forma de tabela.
const pessoa = {
    altura: 1.8,
    idade: 20,
    nome: 'Jhonata'
};
console.table(pessoa); // Mostra o objeto em forma de tabela.
///////////////////////////////////////////////////////////////////////////
console.count('processo'); // Mostra quantas vezes esse processo foi executado.
console.count('processo');
console.count('processo');
console.log('Resentando o processo:');
console.countReset('processo'); // Reseta a quantidade de vezes em que o processo foi executado.
console.count('processo');
///////////////////////////////////////////////////////////////////////////
let sum = 0;
console.time('contador'); // Inicia um cronômetro para mostrar o tempo de execução de determinada label.
for(let i = 0; i < 100000; i++){
    sum += 1;
}
console.timeEnd('contador'); // Encerra o cronômetro e mostra o tempo de execução de determinada label.
///////////////////////////////////////////////////////////////////////////
console.assert(true, 'Faça algo!'); // Testar uma condição.
console.assert(false, 'Ih Rapaz %s, que pena!', 'Não funcionou'); // Testar uma condição.
///////////////////////////////////////////////////////////////////////////
// console.clear(); // Limpar o console