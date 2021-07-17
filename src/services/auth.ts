/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { v4 as uuid } from 'uuid';
// Referência: https://www.youtube.com/watch?v=pvrKHpXGO8E

type SignInRequestData = {
  username: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

// eslint-disable-next-line no-unused-vars
export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    userData: {
      name: 'Pedro de Paula',
      username: 'pmdpaula',
      email: 'pmdpaula@yahoo.com.br',
      avatarUrl: 'https://github.com/pmdpaula.png',
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    userData: {
      name: 'Pedro de Paula',
      username: 'pmdpaula',
      email: 'pmdpaula@yahoo.com.br',
      avatarUrl: 'https://github.com/pmdpaula.png',
    },
  };
}
