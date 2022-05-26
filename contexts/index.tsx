import React, { ReactNode } from 'react';

import { ThemeProvider } from './theme';

type AppContextProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppContextProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
