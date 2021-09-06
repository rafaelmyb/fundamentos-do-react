import React from 'react';

import { ThemeContextProvider } from './context/ThemeContext';
import { ProviderTheme } from './components/ProviderTheme';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <ThemeContextProvider>
      <ProviderTheme>
        <GlobalStyle />
        <Layout />
      </ProviderTheme>
    </ThemeContextProvider>
  );
}

export default App;