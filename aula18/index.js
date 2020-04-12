class Pessoa{
  constructor(nome, idade, sobrenome){
    this.nome = nome
    this.idade  = idade
    this.sobrenome = sobrenome
  }

    FalarNomeCompleto(){
      console.log(` Meu nome completo é  ${this.nome  + ' ' +   this.sobrenome} `)
    }

    IdadeAtual(){
      this.idade++ 
      return console.log(`Minha idade atual e ${this.idade} `)
    }

}



const pe1 = new Pessoa('Renan', 20, 'Gomes')

pe1.FalarNomeCompleto()
pe1.IdadeAtual()
pe1.IdadeAtual()
pe1.IdadeAtual()


// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25,

//   fala() {
//     console.log(`A minha idade atual é ${this.idade}.`);
//   },

//   incrementaIdade() {
//     this.idade++;
//   }
// };

// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.fala();
// pessoa1.incrementaIdade();
// pessoa1.incrementaIdade()
// pessoa1.incrementaIdade()
// pessoa1.incrementaIdade()
// pessoa1.incrementaIdade()
// pessoa1.incrementaIdade()
// pessoa1.fala();
