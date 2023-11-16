import express from 'express';
import AppRouter from './routes';

const app = express();
const router = AppRouter(app);

app.set('port', 8080);

router.init();

const port = app.get('port');

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
