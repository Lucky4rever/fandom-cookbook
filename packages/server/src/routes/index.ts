import { Application } from 'express';
import APP_ROUTES from '../consts/routes.const';
import fandomsRouter from './fandoms.route';

function AppRouter(app: Application) {
  const init = () => {
    app.get('/', (_req, res) => {
      res.send('API Running');
    });
    
    app.use(APP_ROUTES.FANDOMS, fandomsRouter);
  };
  
  return {
    init,
  };
}

export default AppRouter;
