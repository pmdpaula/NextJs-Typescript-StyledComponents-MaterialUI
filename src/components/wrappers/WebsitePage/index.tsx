/* eslint-disable no-unused-vars */
import { Switch } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ReactNode, useContext, useState } from 'react';

import SEO from '../../foundation/SEO';
import { WebsitePageContext } from './context';

interface WebsitePageWrapperProps {
  themeProps: {
    isDarkTheme: boolean;
  };
  seoProps?: { headTitle: string };
  menuProps?: {
    display: boolean;
  };
  footerProps?: {
    content?: ReactNode;
  };
  children: ReactNode;
}

export default function WebsitePageWrapper({
  children,
  seoProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerProps,
}: WebsitePageWrapperProps): JSX.Element {
  const websitePageContext = useContext(WebsitePageContext);

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    websitePageContext.isDark,
  );

  const toggleTheme = (event: any) => {
    setIsDarkTheme(event.target.checked);
    websitePageContext.setIsDark(event.target.checked);
  };

  // const [theme, setTheme] = useState(themeDark);
  // const [isDarkTheme, setIsDarkTheme] = useState(true);

  // const toggleTheme = (event: any) => {
  //   setIsDarkTheme(event.target.checked);
  // };

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   const initialColorValue = root.style.getPropertyValue(
  //     '--initial-color-mode',
  //   );
  //   // console.log('init', initialColorValue);

  //   setIsDarkTheme(initialColorValue === 'dark');
  // }, []);

  // useEffect(() => {
  //   if (isDarkTheme !== undefined) {
  //     if (isDarkTheme) {
  //       // document.documentElement.setAttribute('data-theme', 'dark');
  //       window.localStorage.setItem('theme', 'dark');
  //     } else {
  //       // document.documentElement.removeAttribute('data-theme');
  //       window.localStorage.setItem('theme', 'light');
  //     }
  //   }
  //   // websitePageContext.isDarkTheme = isDarkTheme;
  //   // console.log(websitePageContext.isDarkTheme);
  // }, [isDarkTheme, websitePageContext]);

  // const toggleTheme = () => {
  //   setTheme(theme.palette.type === 'light' ? themeDark : themeLight);
  //   console.log(`theme.palette.type: ${theme.palette.type}`);
  //   setCookie(null, 'themeType', theme.palette.type, {
  //     maxAge: 1000 * 24 * 60 * 60,
  //     path: '/',
  //   });
  // };

  // setCookie(null, 'themeType', theme.palette.type, {
  //   maxAge: 1000 * 24 * 60 * 60,
  //   path: '/',
  // });

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     if (jssStyles.parentElement) {
  //       jssStyles.parentElement.removeChild(jssStyles);
  //     }
  //   }
  // }, []);

  // footerProps abaixo é apenas para parar de alarmar o eslint sobre unused var
  return (
    <>
      {footerProps}
      <SEO {...seoProps} />
      <Container maxWidth="lg">
        <Switch checked={isDarkTheme} onChange={toggleTheme} />

        {children}
      </Container>
    </>
  );
}
