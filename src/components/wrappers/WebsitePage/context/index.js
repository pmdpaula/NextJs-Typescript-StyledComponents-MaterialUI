/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useState } from 'react';

export const WebsitePageContext = createContext();

export function WrapperProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <WebsitePageContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </WebsitePageContext.Provider>
  );
}
