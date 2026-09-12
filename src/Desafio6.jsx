import React, { useEffect, useState } from 'react';

function Desafio6() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [foto, setFoto] = useState('');
  const [sobre, setSobre] = useState('');
  const [idade, setIdade] = useState('');
  const [lok, setLok] = useState('');
  const [cll, setCll] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((resposta) => resposta.json())
      .then((perfil) => {
        const pessoa = perfil.results[indice];

        setNome(pessoa.name.first);
        setSobre(pessoa.name.last);
        setGenero(pessoa.gender);
        setFoto(pessoa.picture.large);
        setIdade(pessoa.dob.age);
        setLok(`${pessoa.location.city}, ${pessoa.location.state}`);
        setCll(pessoa.cell);
      });
  }, [indice]);

  const mudarIndice = () => {
    setIndice(Math.floor(Math.random() * 20));
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">
        Bem-vindo ao mais revolucionário app de namoro!
      </h1>

      <p className="text-center mb-4">
        Aqui você realmente pode sair com alguém
      </p>

      <div className="card shadow" style={{ width: '400px' }}>
        <img className="card-img-top" src={foto} alt={nome} />

        <div className="card-body text-center">
          <h5 className="card-title">
            {nome} {sobre}
          </h5>

          <p className="card-text">Idade: {idade}</p>

          <p className="card-text">Local: {lok}</p>

          <p className="card-text">Celular: {cll}</p>

          <p className="card-text">Gênero: {genero}</p>

          <button onClick={mudarIndice} className="btn btn-primary">
            Não Gostei
          </button>
        </div>
      </div>
    </div>
  );
}

export default Desafio6;
