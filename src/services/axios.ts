/* eslint-disable @typescript-eslint/indent */
import axios, { AxiosInstance } from 'axios';
import * as express from 'express';
import * as next from 'next';
import { parseCookies } from 'nookies';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getAPIClient(
  ctx?:
    | Pick<next.NextPageContext, 'req'>
    | {
        req: next.NextApiRequest;
      }
    | {
        req: express.Request;
      }
    | null
    | undefined,
): AxiosInstance {
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  api.interceptors.request.use((config) => {
    console.log('config', config);

    return config;
  });

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return api;
}
