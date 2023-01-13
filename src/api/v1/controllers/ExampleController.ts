import { Request, Response, NextFunction, response } from 'express';

export default {
  getAll: (req: Request, res: Response, next: NextFunction): any => {

    Promise.resolve().then(() => {
      res.status(200).send('Controller Example getAll!')
    }).catch((err) => {
      res.status(500).send(err)
    })

  },
  getOne: (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Example getOne!');
  },
  post : (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  post!');
  },
  put : (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  put!');
  },
  delete : (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  put!');
  },

}