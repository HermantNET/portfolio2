// dependencies
var compression = require('compression');
const express = require('express');
const pug = require('pug');
const routes = require('./routes');
const app = express();
// *-------------------------------------------------------------------------*

// config
const port = 80;
app.use(compression());
app.use(express.static('public'));
// *-------------------------------------------------------------------------*

// view engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', routes);
// *-------------------------------------------------------------------------*

// start server
app.listen(port, function() {
  console.log(`${process.env.NODE_ENV} server listening on port ${port}. CTRL-C to exit.`);
});
