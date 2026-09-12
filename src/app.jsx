// App.jsx
// Bibliotecas
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Menus
import Inicio from './pages/inicio';
import MenuTestes from './pages/menuTestes';
import Erro from './pages/erro';
import TrueMenu from './pages/TrueMenu';
import Tcc from './pages/tcc';
import Desafios from './pages/Desafios';

// CSS
import './pages/Desafio.css';
import './pages/footer.css';
import './pages/menu.css';
import './pages/teste.css';

// Páginas
import Header from './pages/header';
import Footer from './pages/footer';
import Modelo from './pages/modelo';

// Testes
import Teste0 from './pages/teste0';
import Teste1 from './pages/teste1';
import Teste2 from './pages/teste2';
import Teste3 from './pages/teste3';
import Teste4 from './pages/teste4';
import Teste5 from './pages/teste5';
import Teste6 from './pages/teste6';
import Teste7 from './pages/teste7';
import Teste8 from './pages/teste8';

// Desafios
import Desafio1 from './pages/Desafio1';
import Desafio2 from './pages/Desafio2';
import Desafio3 from './pages/Desafio3';
import Desafio4 from './pages/Desafio4';
import Desafio5 from './pages/Desafio5';
import Desafio6 from './pages/Desafio6';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TrueMenu />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Inicio />} />

        {/* Modelo */}
        <Route path="modelo" element={<Modelo />} />

        {/* Menu de Desafios */}
        <Route path="menuDesafios" element={<Desafios />}>
          <Route path="desafio1" element={<Desafio1 />} />
          <Route path="desafio2" element={<Desafio2 />} />
          <Route path="desafio3" element={<Desafio3 />} />
          <Route path="desafio4" element={<Desafio4 />} />
          <Route path="desafio5" element={<Desafio5 />} />
          <Route path="desafio6" element={<Desafio6 />} />
        </Route>

        {/* Tcc */}
        <Route path="tcc" element={<Tcc />}></Route>

        {/* Menu de Testes */}
        <Route path="menuTestes" element={<MenuTestes />}>
          <Route path="teste0" element={<Teste0 />} />
          <Route path="teste1" element={<Teste1 />} />
          <Route path="teste2" element={<Teste2 />} />
          <Route path="teste3" element={<Teste3 />} />
          <Route path="teste4" element={<Teste4 />} />
          <Route path="teste5" element={<Teste5 />} />
          <Route path="teste6" element={<Teste6 />} />
          <Route path="teste7" element={<Teste7 />} />
          <Route path="teste8" element={<Teste8 />} />
        </Route>

        {/* Página de erro */}
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
