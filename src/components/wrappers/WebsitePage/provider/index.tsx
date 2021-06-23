/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themeDark from '../../../../theme/themeDark';
import themeLight from '../../../../theme/themeLight';
import { WebsitePageContext } from '../context';

export default function WebsiteGlobalProvider({ children }: any) {
  const websitePageContext = useContext(WebsitePageContext);
  // // eslint-disable-next-line prettier/prettier
  // const theme = websitePageContext.themeType === 'light' ? themeLight : themeDark;
  // const [theme, setTheme] = useState<themeProps>(themeDef);
  // const [isDarkTheme, setIsDarkTheme] = useState(true);

  // useEffect(() => {
  //   websitePageContext.toggleTheme();
  // }, [websitePageContext, websitePageContext.themeType]);
  // console.log(`provider: ${websitePageContext.themeType.palette.type}`);
  // let isDarkTheme: boolean;
  // const isDarkTheme = useRef<boolean>();

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   const initialColorValue = root.style.getPropertyValue(
  //     '--initial-color-mode',
  //   );
  //   console.log('init', initialColorValue);

  //   // setIsDarkTheme(initialColorValue === 'dark');
  //   isDarkTheme.current = initialColorValue === 'dark';
  // }, [websitePageContext]);

  // useEffect(() => {
  //   if (websitePageContext.isDarkTheme !== undefined) {
  //     if (websitePageContext.isDarkTheme) {
  //       // document.documentElement.setAttribute('data-theme', 'dark');
  //       window.localStorage.setItem('theme', 'dark');
  //     } else {
  //       // document.documentElement.removeAttribute('data-theme');
  //       window.localStorage.setItem('theme', 'light');
  //     }
  //   }
  // }, [websitePageContext]);

  // console.log('isDarkTheme: ', isDarkTheme);

  // useEffect(() => {
  //   console.log('websitePageContext', websitePageContext);
  // }, [websitePageContext]);

  return (
    <MuiThemeProvider
      theme={websitePageContext.isDark ? themeDark : themeLight}
    >
      <ThemeProvider theme={websitePageContext.isDark ? themeDark : themeLight}>
        <CssBaseline />
        {/* <GlobalStyle /> */}
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
