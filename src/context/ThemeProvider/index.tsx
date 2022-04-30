import React from 'react';
import { ThemeProvider as TP, theme } from '../../../stitches.config';

const ThemeProvider: React.FC = ({ children }) => {
  return <TP theme={theme}>{children}</TP>;
};

export default ThemeProvider;
