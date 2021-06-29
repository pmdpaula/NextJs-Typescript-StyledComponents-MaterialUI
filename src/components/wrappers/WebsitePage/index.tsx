/* eslint-disable no-unused-vars */
import { Switch } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import globalDefinitions from '../../../config/globalDefinitions';
import AxDrawer from '../../foundation/AxDrawer/AxDrawer';
import AxFooter from '../../foundation/AxFooter/AxFooter';
import SEO from '../../foundation/SEO';
import { WebsitePageContext } from './context';

interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
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

const { drawerWidth } = globalDefinitions;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function WebsitePageWrapper({
  children,
  seoProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerProps,
}: WebsitePageWrapperProps): JSX.Element {
  const websitePageContext = useContext(WebsitePageContext);
  const theme = useContext(ThemeContext);

  // const [isDark, setIsDark] = useState<boolean>(
  //   websitePageContext.isDark,
  // );
  const [isDark, setIsDark] = useState<boolean | undefined>();
  const [open, setOpen] = useState<boolean>(true);
  const isDrawerCloseble = !!useMediaQuery(theme.breakpoints.down('md')); // in small screens drawer is closable, in big is fixed

  const toggleTheme = (event: any) => {
    setIsDark(event.target.checked);
    websitePageContext.setIsDark(event.target.checked);
  };

  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // const [theme, setTheme] = useState(themeDark);
  // const [isDark, setIsDark] = useState(true);

  // const toggleTheme = (event: any) => {
  //   setIsDark(event.target.checked);
  // };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );

    setIsDark(initialColorValue === 'dark');
    websitePageContext.setIsDark(initialColorValue === 'dark');
  }, [websitePageContext]);

  useEffect(() => {
    if (isDark !== undefined) {
      if (isDark) {
        // document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        websitePageContext.setIsDark(true);
        setIsDark(true);
      } else {
        // document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
        websitePageContext.setIsDark(false);
        setIsDark(false);
      }
    }
  }, [isDark, websitePageContext]);

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
      <SEO {...seoProps} />

      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(
            classes.appBar,
            open && isDrawerCloseble && classes.appBarShift,
          )}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Box className={classes.title}>
              <Image
                src="/AxBladeSoftware_logo_nome_dark.svg"
                width={160}
                height={40}
              />
              {/* <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              AxeBlade Software
            </Typography> */}
            </Box>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Switch
              checked={websitePageContext.isDark}
              onChange={toggleTheme}
            />
          </Toolbar>
        </AppBar>
        <AxDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg">
            <Grid>
              {/* Page content */}
              {children}
            </Grid>
            {footerProps && <AxFooter content={footerProps.content} />}
          </Container>
        </main>
      </div>
    </>
  );
}
