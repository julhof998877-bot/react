import React, { useState } from 'react';
import './teste.css';

function Teste3() {
  const [numero, setNumero] = useState(0);
  const [mudar, setMudar] = useState(0);

  return (
    <div className="teste-container">
      <div className="teste-card">
        <h2>Testando useState</h2>
        <div className="numero-display">{numero}</div>

        <div className="numero-buttons">
          <button onClick={() => setNumero(numero + 1)}>+1</button>
          <button onClick={() => setNumero(numero - 1)}>-1</button>
          <button onClick={() => setNumero(numero * 2)}>*2</button>
          <button onClick={() => setNumero(numero ** 2)}>^2</button>
          <button onClick={() => setNumero(numero / 2)}>/2</button>
          <button onClick={() => setNumero(0)}>Resetar</button>
        </div>

        <input
          type="number"
          placeholder="Número para adicionar"
          onChange={(e) => setMudar(Number(e.target.value))}
        />
        <button onClick={() => setNumero(mudar)}>Mudar Para Número</button>
        <button onClick={() => setNumero(numero + mudar)}>
          Adicionar Número
        </button>

        <h2>verificando resenha(useState)</h2>
        {numero > 1000 && <h3>passou de MIL 👀👀</h3>}
        {numero > 5000 && <h3>passou de 5K 👀👀👀👀👀👀</h3>}
        {numero > 1000000 && <h3>passou de um MILÃOOOAOAOAOAOA 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀</h3>}
      </div>
    </div>
  );
}

export default Teste3;
