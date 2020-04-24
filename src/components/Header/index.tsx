import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const currentLocation = useHistory().location.pathname;

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            Listagem
            {currentLocation === '/' && <div />}
          </Link>

          <Link to="/import">
            Importar
            {currentLocation === '/import' && <div />}
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
