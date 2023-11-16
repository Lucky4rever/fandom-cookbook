import { Response, Request } from 'express';
import fandomsServices from '../services/fandoms.service';
import { tryCatch } from '../utils/try-catch';

function fandomsController(service: ReturnType<typeof fandomsServices>) {
  const getFandomHighights = (req: Request, res: Response) => {
    tryCatch(() => {
      const fandomHighights = service.getFandomHighights();
      res.json(fandomHighights);
    })(req, res);
  };

  const getFandomByFandomName = (req: Request, res: Response) => {
    tryCatch(() => {
      const { fandom } = req.params;
      
      if (!fandom)  throw new Error('fandom is not setted'); 

      const fandomHighights = service.getFandomByFandomName(fandom);
      res.json(fandomHighights);
    })(req, res);
  };

  return {
    getFandomHighights,
    getFandomByFandomName,
  };
}

export default fandomsController(fandomsServices());
