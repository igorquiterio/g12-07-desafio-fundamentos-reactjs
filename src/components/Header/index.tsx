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
          <Link key="listagem" to="/">
            Listagem
          </Link>
          <Link key="listagem" to="/import">
            Importar
          </Link>
          <StyledLink activeClassName={true} />
        </nav>
      </header>
    </Container>
  );
};

export default Header;
