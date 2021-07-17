import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import {
  createContext,
  ReactChild,
  ReactChildren,
  useEffect,
  useState,
} from 'react';

import { api } from '../../../../services/api';
import {
  recoverUserInformation,
  signInRequest,
} from '../../../../services/auth';

type User = {
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
};

export type SignInData = {
  username: string;
  password: string;
};

type AuthContextType = {
  user?: User;
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
};

interface AuthProviderProps {
  children: ReactChild | ReactChildren;
}

export const AuthContext = createContext({} as AuthContextType);
// export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | undefined>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies(); // esta linha é igual as duaas seguintes. Que é desestruturação com renomeação.
    // const cookies = parseCookies();
    // const token = cookies['nextauth.token'];

    if (token) {
      recoverUserInformation().then((response) => {
        // console.log('response.userData:', response.userData);

        setUser(response.userData);
      });
    }
  }, []);

  async function signIn({ username, password }: SignInData): Promise<void> {
    // eslint-disable-next-line no-unused-vars
    // const { token, userData } = await signInRequest({
    const { token } = await signInRequest({
      username,
      password,
    });

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 24, // 24 hour
    });

    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/profile');
  }

  function signOut(): void {
    destroyCookie(null, 'nextauth.token');

    Router.push('/app/login/');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
