/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import clsx from 'clsx';
import { useState } from 'react';
import styled from 'styled-components';

import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const LoginButton = styled(Button)`
  width: 15.2rem;
  height: 3rem;
  border-radius: 49px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
`;

const PageLogin = (): JSX.Element => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);
  // const theme = useContext(ThemeContext);

  const toggleSignMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={clsx('container', isSignUpMode && 'sign-up-mode')}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <Typography
              variant="h3"
              color="textSecondary"
              style={{ marginBottom: '1rem' }}
            >
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              label="Usuário"
              name="username"
              style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Senha"
              name="password"
              style={{ marginBottom: '1rem' }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <LoginButton
              variant="contained"
              color="primary"
              type="submit"
              value="Login"
            >
              Login
            </LoginButton>
          </form>

          <form action="#" className="sign-up-form">
            <Typography
              variant="h3"
              color="textSecondary"
              style={{ marginBottom: '1rem' }}
            >
              Sign up
            </Typography>
            <TextField
              variant="outlined"
              // className={classes.margin}
              // id="username"
              name="username"
              label="Usuário"
              style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              // id="email"
              name="email"
              label="E-mail"
              style={{ marginBottom: '1rem' }}
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              // className={classes.margin}
              // id="password"
              name="password"
              label="Senha"
              style={{ marginBottom: '1rem' }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />

            <LoginButton
              variant="contained"
              color="primary"
              type="submit"
              value="Login"
            >
              Sign Up
            </LoginButton>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <Typography variant="h3">Novo aqui?</Typography>
            <Typography variant="body1">Faça seu cadastro</Typography>
            <Button
              variant="outlined"
              style={{
                // borderWidth: 3,
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              // value="up"
              onClick={toggleSignMode}
            >
              Sign up
            </Button>
          </div>
          <img src="/images/signup.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <Typography variant="h3">Já é um de nós?</Typography>
            <Typography variant="body1">Faça o login</Typography>
            <Button
              variant="outlined"
              style={{
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              // value="up"
              onClick={toggleSignMode}
            >
              Sign in
            </Button>
          </div>
          <img src="/images/login.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default websitePageHOC(PageLogin, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
  },
});
