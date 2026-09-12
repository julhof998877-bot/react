import React from 'react';

function Teste8() {
  let pessoa1 = {
    nome: 'Julho',
    idade: 15,
    cartel: '2-2-0',
    tmpTreino: '3 Anos',
    esportesTreinados: 'jiu jitsu, karatê, boxe, taekwondo',

    apresentar() {
      alert(
        `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou um lutador e tenho ${this.tmpTreino} de tempo de treino, já pratiquei ${this.esportesTreinados} e meu cartel é ${this.cartel}, eu sei decepcionante`
      );
    },
  };

  return (
    <div>
      <h1>Objetos</h1>
      <h2>O que é um objeto?</h2>
      <p>
        Um objeto é um tipo de variável, que possui a capacidade de guardar
        várias informações que estão relacionadas entre si
      </p>
      <p>Um objeto possui: Atributos e Métodos</p>
      <p>Atributos: São as variáveis dentro do objeto</p>
      <p>Métodos: São as funções dentro do objeto</p>

      <h2>Exemplo de Objeto</h2>
      <h3>Objeto Singular: Pessoa</h3>
      <p>Nome: {pessoa1.nome}</p>
      <p>idade: {pessoa1.idade}</p>
      <p>cartel: {pessoa1.cartel}</p>
      <p>tempo de Treino: {pessoa1.tmpTreino}</p>
      <p>esportes Treinados: {pessoa1.esportesTreinados}</p>

      <button
        onClick={() => {
          pessoa1.apresentar();
        }}
      >
        Apresentar
      </button>
    </div>
  );
}

export default Teste8;
