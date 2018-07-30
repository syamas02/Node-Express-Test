'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const model = require('./models/todos');

module.exports = app; // this line is only used to make testing easier.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + 'public'));
// remember to plug in your router and any other middleware you may need here.

app.get('/users', (req, res, next) => {
  res.send(model.listPeople());
});

app.get('/users/:name/tasks', (req, res, next) => {
  res.send(model.list(req.params.name));
});

app.post('/users/:name/tasks', (req, res, next) => {
  //res.send(model.add(req.params.name, req.body));
  console.log('req.body is : ', res.body);
  console.log('req.params.name is : ', req.params.name);
  res.status(201).send(model.list(req.params.name));
  console.log('model list :', model.list());
});

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
