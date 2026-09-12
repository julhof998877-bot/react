import React, { useState, useEffect } from 'react';

function Teste6() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [foto, setFoto] = useState('');
  const [sobre, setSobre] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((resposta) => resposta.json())
      .then((perfil) => {
        setNome(perfil.results[0].name.first);
        setSobre(perfil.results[0].name.last);
        setGenero(perfil.results[0].gender);
        setFoto(perfil.results[0].picture.large);
      });
  }, []);

  return (
    <div>
      <p>Teste de perfil FAKE (OMG)</p>
      <h3>Informação da Pessoa</h3>
      <h4>
        Nome: {nome} {sobre}
      </h4>
      <p>Genero: {genero}</p>
      <p>
        <img src={foto} alt="" />
      </p>
    </div>
  );
}

export default Teste6;
