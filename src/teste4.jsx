import React from 'react';
import {useState,useEffect} from 'react';

function Teste4(){
  
  const [contador,setContador] = useState(0);
  const [estado,setEstado] = useState('');
  const [cronometro,setCronometro] = useState(0);

  //Executa o código sempre que o valor da variável atualizar
  useEffect(() => {
    document.title = `Contador: ${contador}`;
    if (contador > 0){
      setEstado('positivo');
    }
    else if (contador < 0){
      setEstado('negativo');
    }
    else{
      setEstado('neutro');
    }

  },[contador]);

  //Executa o código assim que renderizar a página
  useEffect(() => {
    //alert('Seja bem vindo ao Teste 4!!!!!!!!!!!!!!!!!!!!!!!');
    //new Audio('musica.mp3').play();
    //document.body.style.color = 'red';

    //setInterval -> Cria um temporizador que irá repetir o código dentro de um intervalo determinado
    setInterval(()=>{
      setCronometro(cronometro => cronometro + 1);
    },1000);
  },[]);

  return(
    <div>
      <h2>Testando useEffect</h2>
      <h3>Contador: {contador}</h3>
      <h3>Estado: {estado}</h3>
      <h3>Cronometro: {cronometro}</h3>
      <button onClick={() => {setContador(contador+1)}}>+</button>
      <button onClick={() => {setContador(contador-1)}}>-</button>
    </div>
  );
}

export default Teste4;