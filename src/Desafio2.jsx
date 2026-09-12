import React from 'react';

function Desafio2() {
  const criarPerfil = () => {
    const titulo = document.getElementById('titulo');
    const foto = document.getElementById('foto');

    titulo.textContent = document.getElementById('txtTitulo').value;
    foto.src = document.getElementById('txtFoto').value;
  };

  return (
    <div className="desafio-container">
      <div className="card">
        <h2>Perfil com Foto</h2>

        <input type="text" placeholder="Título" id="txtTitulo" />
        <input type="text" placeholder="URL da imagem" id="txtFoto" />

        <button onClick={criarPerfil}>Criar perfil</button>

        <h3 id="titulo"></h3>
        <img id="foto" alt="" />
      </div>
    </div>
  );
}
export default Desafio2;
