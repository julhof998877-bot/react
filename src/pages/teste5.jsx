import React, { useState, useEffect } from 'react';

function Teste5() {
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resposta) => resposta.json())
      .then((post) => {
        setTitulo(post[0].title);
        setCorpo(post[0].body);
      });
  }, []);
  return (
    <div>
      <p>Teste de API</p>
      <div>
        <h3>1 - JSONPlaceholder</h3>
        <h4>- post</h4>
        <h5>{titulo}</h5>
        <p>{corpo}</p>
      </div>
    </div>
  );
}

export default Teste5;
