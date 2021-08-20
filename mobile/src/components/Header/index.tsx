import React from 'react';

import { Container, Title, Icon, RightIcons } from './styles';

type IIConButtonProps = {
  name: keyof typeof Icon.glyphMap;
  onPress(): void;
};

type IHeaderProps = {
  title?: string;
  leftIcon?: IIConButtonProps;
  rightIcons?: IIConButtonProps[];
};

const Header: React.FC<IHeaderProps> = ({ title, leftIcon, rightIcons }) => {
  return (
    <Container>
      {leftIcon && <Icon {...leftIcon} />}

      <Title>{title}</Title>

      <RightIcons>
        {rightIcons?.map(iconButton => (
          <Icon key={iconButton.name} {...iconButton} />
        ))}
      </RightIcons>
    </Container>
  );
};

export default Header;
