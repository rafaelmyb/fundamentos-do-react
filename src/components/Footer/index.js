import React, { useContext } from 'react';

import { Container } from './styles';

import { useTheme } from '../../hooks/useTheme';

export default function Footer() {
  const { selectedTheme, onToggleTheme } = useTheme();

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}