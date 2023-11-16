import { Request, Response } from 'express';

export const tryCatch = (fn: Function) => (req: Request, res: Response) => {
  try {
    fn(req, res);
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
};
