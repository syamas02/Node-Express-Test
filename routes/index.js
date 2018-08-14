'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.

router.get('/users', (req, res) => {
  res.send(todos.listPeople());
});
