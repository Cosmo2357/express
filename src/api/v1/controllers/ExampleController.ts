import { Request, Response, NextFunction, response } from 'express';

export default {
  getAll: (req: Request, res: Response, next: NextFunction): any => {
    
    try {
      const data: any = ' await test()'
      if (!data) {
        throw new Error('Error')
      }
      return res.status(200).send({ success: true, message: 'Success'});
     } catch (error) {
      console.log(error)
      return res.status(500).send(
        {
          success: false,
          message: 'Error',
          error: error
        }
      );
    }

  }
  ,

  getOne: (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Example getOne!');
  },

  post: (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  post!');
  },

  put: (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  put!');
  },

  delete: (req: Request, res: Response, next: NextFunction): any => {
    res.send('Controller Post Example  put!');
  },

}