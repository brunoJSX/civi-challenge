import React from 'react';

import { Container, Title } from './styles';

type IHeaderProps = {
  title?: string;
  // leftIcon:
};

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
