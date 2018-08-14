'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const todos = require('./models/todos');
const routes = require('./routes');
module.exports = app; // this line is only used to make testing easier.
// remember to plug in your router and any other middleware you may need here.

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
