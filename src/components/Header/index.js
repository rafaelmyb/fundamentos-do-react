import React, { useContext } from 'react';

import { Container } from './styles';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { selectedTheme, onToggleTheme } = useTheme();

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}