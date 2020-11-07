import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <StyledLink
            selected={location.pathname === '/'}
            key="listagem"
            to="/"
          >
            Listagem
          </StyledLink>
          <StyledLink
            selected={location.pathname === '/import'}
            key="import"
            to="/import"
          >
            Importar
          </StyledLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
