const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('####');

// for (let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log('####');

// for (let valor of nomes) {
//   console.log(valor);
// }

// console.log('####');
let pessoa2 = ['Renan', 12, 20, true,  'Mendes']

pessoa2.forEach((valor, indice, array) => {
  console.log(valor, indice, array);
});
