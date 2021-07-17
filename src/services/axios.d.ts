/* eslint-disable @typescript-eslint/indent */
import * as express from 'express';
import * as next from 'next';

export type CtxCookies = {
  ctx?:
    | Pick<next.NextPageContext, 'req'>
    | {
        req: next.NextApiRequest;
      }
    | {
        req: express.Request;
      }
    | null
    | undefined;
};
