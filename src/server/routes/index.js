import { Router } from 'express';
import libraryRouter from './v1/library';

import path from 'path';

const v1Router = new Router();

v1Router.use('/api/v1/library', libraryRouter); 

v1Router.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'public/index.html'));
});
export default v1Router;
