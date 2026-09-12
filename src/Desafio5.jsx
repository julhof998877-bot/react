import React, { useEffect, useState } from 'react';
import './teste.css';

function Desafio5() {
  const [soco, setSoco] = useState(0);
  const [dano, setDano] = useState(1);
  const [status, setStatus] = useState();

  useEffect(() => {
    document.title = `Cliker do rica games: ${soco}`;
    if (soco >= 5000) setStatus('💀 NOCAUTEADO 💀');
    else if (soco >= 4500) setStatus('VOCÊ SENTE QUE O FIM ESTÁ PRÓXIMO');
    else if (soco >= 3500) setStatus('ELE ESTÁ COMPLETAMENTE EXAUSTO');
    else if (soco >= 3000) setStatus('ELE MAL CONSEGUE FICAR EM PÉ');
    else if (soco >= 2500) setStatus('ELE ESTÁ QUASE DESISTINDO');
    else if (soco >= 2000) setStatus('ELE JÁ NÃO REAGE AOS GOLPES');
    else if (soco >= 1500) setStatus('ELE COMEÇOU A CAMBALEAR');
    else if (soco >= 1000) setStatus('ELE FICOU CANSADO');
    else if (soco >= 500) setStatus('ELE FICOU CONFUSO');
    else if (soco >= 100) setStatus('ELE COMEÇOU A PERDER O FOLEGO');
    else if (soco >= 0) setStatus('???');
  }, [soco]);

  return (
    <div className="teste-container">
      <div className="teste-card">
        <h1>
          ---<span>DEFENDA-SE DO RICA GAMES</span>---
        </h1>

        <div className="bloco">
          <h2>Socos Efetuados:</h2>

          <p className="numero-display">{soco}</p>

          <h3>Dano por soco: {dano}</h3>

          <div className="ultima-conquista">
            <h3>Status atual: </h3>
            <p>{status}</p>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThVMLmR6iN-MUnvlU7HdmOqOD2OfCTVf1enaGFceoqOkfrSk3KPxNsZ3N&s=10"
            alt="Rica Games"
            className="imagem-click"
            onClick={() => setSoco(soco + dano)}
          />

          <div className="numero-buttons">
            <button
              onClick={() => {
                setSoco(0);
                setDano(1);
                setStatus('');
              }}
              style={{ backgroundColor: '#ef4444' }}
            >
              Resetar
            </button>
          </div>

          <div className="conteudo-lateral">
            {/* ESQUERDA */}
            <div className="livro-golpes">
              <h2>Livro De Golpes</h2>

              {soco >= 25 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 1);
                    setSoco((prev) => prev - 25);
                  }}
                >
                  Jab - 25 (+1 dano)
                </button>
              )}

              {soco >= 100 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 2);
                    setSoco((prev) => prev - 100);
                  }}
                >
                  Direto - 100 (+2 dano)
                </button>
              )}

              {soco >= 300 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 4);
                    setSoco((prev) => prev - 300);
                  }}
                >
                  Cruzado - 300 (+4 dano)
                </button>
              )}

              {soco >= 800 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 7);
                    setSoco((prev) => prev - 800);
                  }}
                >
                  Gancho - 800 (+7 dano)
                </button>
              )}

              {soco >= 2000 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 12);
                    setSoco((prev) => prev - 2000);
                  }}
                >
                  Uppercut - 2000 (+12 dano)
                </button>
              )}

              {soco >= 4000 && (
                <button
                  onClick={() => {
                    setDano((prev) => prev + 20);
                    setSoco((prev) => prev - 4000);
                  }}
                >
                  Combo Brutal - 4000 (+20 dano)
                </button>
              )}
            </div>

            {/* DIREITA */}
            <div className="status-rica">
              <h2>🥶 Status de Rica</h2>

              {soco >= 100 && <h3>ELE COMEÇOU A PERDER O FOLEGO</h3>}
              {soco >= 500 && <h3>ELE FICOU CONFUSO</h3>}
              {soco >= 1000 && <h3>ELE FICOU CANSADO</h3>}
              {soco >= 1500 && <h3>ELE COMEÇOU A CAMBALEAR</h3>}
              {soco >= 2000 && <h3>ELE JÁ NÃO REAGE AOS GOLPES</h3>}
              {soco >= 2500 && <h3>ELE ESTÁ QUASE DESISTINDO</h3>}
              {soco >= 3000 && <h3>ELE MAL CONSEGUE FICAR EM PÉ</h3>}
              {soco >= 3500 && <h3>ELE ESTÁ COMPLETAMENTE EXAUSTO</h3>}
              {soco >= 4500 && <h3>VOCÊ SENTE QUE O FIM ESTÁ PRÓXIMO</h3>}
              {soco >= 5000 && <h3>💀 NOCAUTEADO 💀</h3>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desafio5;
