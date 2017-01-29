// dependencies
const express = require('express');
const app = express();
const pug = require('pug');
const routes = require('./routes');
// *-------------------------------------------------------------------------*

// config
const port = 80;
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
