'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.

router.get('/users', (req, res) => {
  res.send(todos.listPeople());
});

router.get('/users/:name/tasks', (req, res, next) => {
  const { status } = req.query;

  if (!todos.listPeople().includes(req.params.name)) {
    res.status(404).send();
  } else if (status === 'complete') {
    res.send(todos.list(req.params.name).filter(task => task.complete));
  } else if (status === 'active') {
    res.send(todos.list(req.params.name).filter(task => !task.complete));
  } else res.send(todos.list(req.params.name));
});

router.post('/users/:name/tasks', (req, res, next) => {
  if (req.body.content === '') {
    res.status(400).send();
  } else res.status(201).send(todos.add(req.params.name, req.body));
});

router.put('/users/:name/tasks/:index', (req, res, next) => {
  res.send(todos.complete(req.params.name, req.params.index));
});

router.delete('/users/:name/tasks/:id', (req, res, next) => {
  res.status(204).send(todos.remove(req.params.name, req.params.id));
});
