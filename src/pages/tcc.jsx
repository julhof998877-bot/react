import React, { useEffect, useState } from 'react';

function Tcc() {
  const [pokemon1, setPokemon1] = useState(1);
  {
    /* E.P. 151 */
  }
  const [pokemon2, setPokemon2] = useState(2);
  {
    /* E.P. 251 */
  }

  {
    /* poke 1 */
  }
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');
  const [hp, setHp] = useState();
  const [atk, setAtk] = useState();
  const [def, setDef] = useState();
  const [sp, setSp] = useState();

  {
    /* poke2 */
  }
  const [nome2, setNome2] = useState('');
  const [foto2, setFoto2] = useState('');
  const [hp2, setHp2] = useState();
  const [atk2, setAtk2] = useState();
  const [def2, setDef2] = useState();
  const [sp2, setSp2] = useState();

  {
    /* esqueci, mas é foda */
  }
  const [hpr, setHpr] = useState('');
  const [atkr, setAtkr] = useState('');
  const [defr, setDefr] = useState('');
  const [spr, setSpr] = useState('');

  {
    /* analise de vitoria */
  }
  const [vt, setVt] = useState(0);
  const [vt2, setVt2] = useState(0);
  const [gn, setGn] = useState('');

  {
    /* api do poke 1 */
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`)
      .then((resposta) => resposta.json())
      .then((perfil) => {
        setNome(perfil.name);
        setFoto(perfil.sprites.front_default);
        setHp(perfil.stats[0].base_stat);
        setAtk(perfil.stats[1].base_stat);
        setDef(perfil.stats[2].base_stat);
        setSp(perfil.stats[5].base_stat);
      });
  }, [pokemon1]);

  {
    /* api do poke 2 */
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`)
      .then((resposta) => resposta.json())
      .then((perfil) => {
        setNome2(perfil.name);
        setFoto2(perfil.sprites.front_default);
        setHp2(perfil.stats[0].base_stat);
        setAtk2(perfil.stats[1].base_stat);
        setDef2(perfil.stats[2].base_stat);
        setSp2(perfil.stats[5].base_stat);
      });
  }, [pokemon2]);

  {
    /* comparador de pontos e vitoria */
  }
  useEffect(() => {
    let pontos1 = 0;
    let pontos2 = 0;

    if (hp > hp2) {
      setHpr('>');
      pontos1++;
    } else if (hp < hp2) {
      setHpr('<');
      pontos2++;
    } else {
      setHpr('=');
    }

    if (atk > atk2) {
      setAtkr('>');
      pontos1++;
    } else if (atk < atk2) {
      setAtkr('<');
      pontos2++;
    } else {
      setAtkr('=');
    }

    if (def > def2) {
      setDefr('>');
      pontos1++;
    } else if (def < def2) {
      setDefr('<');
      pontos2++;
    } else {
      setDefr('=');
    }

    if (sp > sp2) {
      setSpr('>');
      pontos1++;
    } else if (sp < sp2) {
      setSpr('<');
      pontos2++;
    } else {
      setSpr('=');
    }

    setVt(pontos1);
    setVt2(pontos2);

    if (pontos1 > pontos2) {
      if (pontos1 == 4) {
        setGn(`O Pokémon ${nome} MASSACROU ${nome2}`);
      } else {
        setGn(`O Pokémon ${nome} ganhou`);
      }
    } else if (pontos2 > pontos1) {
      if (pontos2 == 4) {
        setGn(`O Pokémon ${nome2} MASSACROU ${nome}`);
      } else {
        setGn(`O Pokémon ${nome2} ganhou`);
      }
    } else if (hp === hp2 && atk === atk2 && def === def2 && sp === sp2) {
      setGn(' ! EQUILIBRIO PERFEITO ! ');
    } else {
      setGn('Empate');
    }
  }, [hp, hp2, atk, atk2, def, def2, sp, sp2, nome, nome2]);

  {
    /* random de pokemon heeheheh */
  }
  const gerarPoke = () => {
    setPokemon1(Math.floor(Math.random() * 1025) + 1);
    setPokemon2(Math.floor(Math.random() * 1025) + 1);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Rinha de Pokémon <h6>(Powerscaling)</h6>
      </h1>

      <div className="row align-items-center justify-content-center g-4">
        {/* Poke1 */}
        <div className="col-md-4">
          <div className="card shadow text-center">
            <img
              src={foto}
              alt={nome}
              className="card-img-top mx-auto"
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'contain',
              }}
            />

            <div className="card-body">
              <h3 className="card-title text-capitalize">
                {nome}
                <h6>{pokemon1}</h6>
              </h3>

              <hr />

              <p>
                Vida: <strong>{hp}</strong>
              </p>
              <p>
                Dano: <strong>{atk}</strong>
              </p>
              <p>
                Defesa: <strong>{def}</strong>
              </p>
              <p>
                Velocidade: <strong>{sp}</strong>
              </p>
              <p>{vt}</p>
            </div>
          </div>
        </div>

        {/* quebra pau */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h3 className="text-capitalize mb-4">
                {nome} <span className="text-danger">VS</span> {nome2}
              </h3>

              <div className="list-group">
                <div className="list-group-item d-flex justify-content-between">
                  <span>Vida</span>
                  <strong>
                    {hp} {hpr} {hp2}
                  </strong>
                </div>

                <div className="list-group-item d-flex justify-content-between">
                  <span>Dano</span>
                  <strong>
                    {atk} {atkr} {atk2}
                  </strong>
                </div>

                <div className="list-group-item d-flex justify-content-between">
                  <span>Defesa</span>
                  <strong>
                    {def} {defr} {def2}
                  </strong>
                </div>

                <div className="list-group-item d-flex justify-content-between">
                  <span>Velocidade</span>
                  <strong>
                    {sp} {spr} {sp2}
                  </strong>
                </div>
              </div>

              <div className="alert alert-primary mt-4 mb-0">
                <strong>{gn}</strong>
              </div>

              <div className="text-center mt-5">
                <button
                  className="btn btn-danger btn-lg px-5"
                  onClick={gerarPoke}
                >
                  Gerar Pokémon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Poke2 */}
        <div className="col-md-4">
          <div className="card shadow text-center">
            <img
              src={foto2}
              alt={nome2}
              className="card-img-top mx-auto"
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'contain',
              }}
            />

            <div className="card-body">
              <h3 className="card-title text-capitalize">
                {nome2}
                <h6>{pokemon2}</h6>
              </h3>

              <hr />

              <p>
                Vida: <strong>{hp2}</strong>
              </p>
              <p>
                Dano: <strong>{atk2}</strong>
              </p>
              <p>
                Defesa: <strong>{def2}</strong>
              </p>
              <p>
                Velocidade: <strong>{sp2}</strong>
                <p>{vt2}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tcc;
