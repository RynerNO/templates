import Express from 'express';

import Webpack from 'webpack';

import WebpackConfig from '../../webpack.dev.js';

import WebpackDevMiddleware from 'webpack-dev-middleware';

import WebpackHotMiddleware from 'webpack-hot-middleware';

import v1Router from '@routes';

import BodyParser from 'body-parser';

import path from 'path';

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: false
}));

const compiler = Webpack(WebpackConfig);
app.use(
      WebpackDevMiddleware(compiler, {
        hot: true,
        publicPath: WebpackConfig.output.publicPath
      })
    );
app.use(WebpackHotMiddleware(compiler));
app.use(v1Router);
app.use(Express.static(path.resolve('dist', 'public')));

app.listen(3000, () => {
  console.log("Server is running at port 3000")
});


