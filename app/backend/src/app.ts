import * as express from 'express';
import errorMiddleware from './auxMiddlewares/Erro/errorMiddleware';
import router from './route';
import matchesRouter from './Routes/matchesRoute';
import teamRouter from './Routes/teamsRoute';

class App {
  public app: express.Express;
  // ...

  constructor() {
    // ...
    this.app = express();
    this.config();
    // ...
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(router);
    this.app.use('/teams', teamRouter);
    this.app.use('/matches', matchesRouter);
    this.app.use(errorMiddleware);
    // ...
  }

  // ...
  public start(PORT: string | number): void {
    // ...
    this.app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
