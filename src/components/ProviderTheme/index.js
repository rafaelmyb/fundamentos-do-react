import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

export function ProviderTheme(props) {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      {props.children}
    </ThemeProvider>
  );
}