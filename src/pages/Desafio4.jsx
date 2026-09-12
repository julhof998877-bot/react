import React, { useState } from 'react';

function Desafio4() {
  const soma = () => {
    const n1 = Number(document.getElementById('numero1').value);
    const n2 = Number(document.getElementById('numero2').value);

    document.getElementById('resultadoSoma').textContent = `Resultado: ${
      n1 + n2
    }`;
  };

  const media = () => {
    const notas = [1, 2, 3, 4, 5].map((i) =>
      Number(document.getElementById(`nota${i}`).value)
    );

    const mediaFinal = notas.reduce((a, b) => a + b, 0) / notas.length;

    document.getElementById(
      'resultado'
    ).textContent = `Média: ${mediaFinal.toFixed(2)}`;
  };

  const imc = () => {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    const valor = peso / (altura * altura);

    document.getElementById(
      'resultadodeluxe'
    ).textContent = `IMC: ${valor.toFixed(2)}`;
  };

  const graus = () => {
    const numero = Number(document.getElementById('inputGraus').value);
    const temperatura = document.getElementById('tipoTemperatura').value;
    const textoGraus = document.getElementById('textoGraus');

    let f = numero * 1.8 + 32;
    let c = (numero - 32) / 1.8;

    if (temperatura === 'c') {
      textoGraus.textContent = `${numero}°C > ${f.toFixed(1)}°F`;
    } else {
      textoGraus.textContent = `${numero}°F > ${c.toFixed(1)}°C`;
    }
  };

  return (
    <div className="desafio-container">
      <div className="card">
        <h2>Calculadora</h2>

        {/* SOMA */}
        <div className="bloco">
          <h3>Soma</h3>
          <input type="number" id="numero1" placeholder="Número 1" />
          <input type="number" id="numero2" placeholder="Número 2" />
          <button onClick={soma}>Calcular</button>
          <p id="resultadoSoma"></p>
        </div>

        {/* MÉDIA */}
        <div className="bloco">
          <h3>Média</h3>
          <input type="number" id="nota1" placeholder="Nota 1" />
          <input type="number" id="nota2" placeholder="Nota 2" />
          <input type="number" id="nota3" placeholder="Nota 3" />
          <input type="number" id="nota4" placeholder="Nota 4" />
          <input type="number" id="nota5" placeholder="Nota 5" />
          <button onClick={media}>Calcular</button>
          <p id="resultado"></p>
        </div>

        {/* IMC */}
        <div className="bloco">
          <h3>IMC</h3>
          <input type="number" id="peso" placeholder="Peso (kg)" />
          <input type="number" id="altura" placeholder="Altura (m)" />
          <button onClick={imc}>Calcular</button>
          <p id="resultadodeluxe"></p>
        </div>

        {/* TEMPERATURA */}
        <div className="bloco">
          <h3>Temperatura</h3>

          <input
            type="number"
            id="inputGraus"
            placeholder="Digite a temperatura"
          />

          <div>
            <label>
              <input
                type="radio"
                name="temperatura"
                id="celsiusRadio"
                value="c"
                defaultChecked
              />
              C → F
            </label>

            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="temperatura"
                id="fahrenheitRadio"
                value="f"
              />
              F → C
            </label>
          </div>

          <select id="tipoTemperatura">
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
          </select>

          <button onClick={graus}>Converter</button>

          <h3 id="textoGraus"></h3>
        </div>
      </div>
    </div>
  );
}

export default Desafio4;
