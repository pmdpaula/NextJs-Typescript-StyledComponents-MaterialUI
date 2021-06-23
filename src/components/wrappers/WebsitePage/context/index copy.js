/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useReducer } from 'react';

// interface WebsitePageContextProps {
//   isDarkTheme: boolean;
// }

// export const WebsitePageContext = React.createContext({
//   isDarkTheme: true,
// });

// export const WebsitePageContext = React.createContext<WebsitePageContextProps>(
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   undefined!,
// );

// eslint-disable-next-line @typescript-eslint/ban-types
// function createCtx<A extends {} | null>() {
//   const ctx = React.createContext<A | undefined>(undefined);

//   function useCtx() {
//     const c = React.useContext(ctx);
//     if (c === undefined) {
//       throw new Error('useCtx must be inside a Provider with a value');
//     }

//     return c;
//   }
//   return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
// }

// export const [useCurrentTheme, CurrentThemeProvider] = createCtx<any>();

export const WebsitePageContext = createContext();

const initialState = {
  isDarkMode: true,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return { isDarkMode: false };
    case 'dark':
      return { isDarkMode: true };
    default:
      return state;
  }
};

export function WrapperProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <WebsitePageContext.Provider value={{ state, dispatch }}>
      {children}
    </WebsitePageContext.Provider>
  );
}
