import React, { useEffect, useState } from 'react';

function Teste7() {
  const [raposa, setRaposa] = useState('');

  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  const [foto, setFoto] = useState('');

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    fetch('https://randomfox.ca/floof/')
      .then((resposta) => resposta.json())
      .then((post) => {
        setRaposa(post.image);
      });
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((post) => {
        setProduto(post[indice].title);
        setValor(post[indice].price);
        setDesc(post[indice].description);
        setFoto(post[indice].image);
      });
  }, [indice]);

  const mudarIndice = () => {
    setIndice(Math.floor(Math.random() * 20));
  };

  return (
    <div>
      <div>
        <h2>exemplos de APIs</h2>
        <h3>Raposa Aleatória</h3>
        <p>
          <img src={raposa} alt="Imagem da Raposa" width="200px" />
        </p>
      </div>
      <div>
        <h3>Produtos</h3>
        <p>Titulo: {produto}</p>
        <p>Preço: {valor}</p>
        <p>Descrição: {desc}</p>
        <img src={foto} alt="foto do negoÇÃO" />
      </div>
      <button onClick={mudarIndice}>eheehehehhehehheheheheheh</button>
    </div>
  );
}

export default Teste7;
