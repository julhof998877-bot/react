import React from 'react';
import './teste.css';

function Teste1() {
  return (
    <div className="teste-container">
      <div className="teste-card">
        <h1>
          RTX 5<span>0</span>7<span>0</span>
        </h1>

        <img
          src="https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/new-gen/GB205-300-VENTUS-3X-OC/kv/msi-70ventus-3x-oc.webp"
          alt="RTX 5070"
        />

        <p>
          A NVIDIA GeForce RTX 5070 é uma placa de vídeo de alto desempenho baseada na
          arquitetura Blackwell (GB205) e fabricada em 5 nm, projetada para jogos em
          1440p (Quad HD) e iniciante em 4K, utilizando memórias GDDR7 de alta
          velocidade e a nova tecnologia DLSS 4.
        </p>

        <h2>
          O <span style={{color:'#ef4444'}}>RECORDE</span> DA <span style={{color:'#10b981'}}>RTX 5070</span>
        </h2>

        <p>
          Representantes do nosso país viraram notícia nacional e internacional com uma conquista
          seca seca! <span style={{color:'#0084ff'}}>Youtuber de extremo sucesso</span> bate
          recorde mundial com RTX 5070 Ti danificada! O feito ocorreu após uma maratona de
          reparos e ajustes feitos pela equipe, com participação de Enzo Túlio.
        </p>

        <iframe
          src="https://www.youtube.com/embed/LeOOeWpE9tg?si=9K2v4lh-hmuZ4n87"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Teste1;