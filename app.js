'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

module.exports = app; // this line is only used to make testing easier.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + 'public'));
// remember to plug in your router and any other middleware you may need here.

app.get('/', (req, res, next) => {
  res.send([]);
});
if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
