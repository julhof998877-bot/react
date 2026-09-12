import React from 'react';
import './teste.css';

function Teste2() {
  const teste = () => alert('Teste games do JS');
  const testeP = (texto) => alert(texto);
  const texteE = () => {
    const texto = document.getElementById('texto');
    texto.textContent = 'testando';
  };

  return (
    <div className="teste-container">
      <div className="teste-card">
        <p>Eu existo sim</p>

        <button onClick={teste}>Teste</button>
        <button onClick={() => testeP('ratata')}>Teste II</button>
        <button onClick={texteE}>Teste III</button>
        <p id="texto"></p>
      </div>
    </div>
  );
}

export default Teste2;