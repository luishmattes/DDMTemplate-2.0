import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Meu Aplicativo</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/project">Projeto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;