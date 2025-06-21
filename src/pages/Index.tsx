
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Portfolio from './Portfolio';

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default Index;
