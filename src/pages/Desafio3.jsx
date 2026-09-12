import React from 'react';

function Desafio3() {
  const criarPerfil = () => {
    document.getElementById('titulo').textContent =
      document.getElementById('txtTitulo').value;

    document.getElementById('texto').textContent =
      document.getElementById('txtTexto').value;

    document.getElementById('img').src =
      document.getElementById('txtImg').value;
  };

  return (
    <div className="desafio-container">
      <div className="card">
        <h2>Gerar Conteúdo</h2>

        <input type="text" placeholder="Título" id="txtTitulo" />
        <input type="text" placeholder="Descrição" id="txtTexto" />
        <input type="text" placeholder="URL da imagem" id="txtImg" />

        <button onClick={criarPerfil}>Gerar</button>

        <h3 id="titulo"></h3>
        <p id="texto"></p>
        <img id="img" alt="" />
      </div>
    </div>
  );
}

export default Desafio3;