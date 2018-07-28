'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function() {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function() {
    // returns an array of all people for whom tasks exist
    const names = Object.keys(tasks);
    return names;
  },
  add: function(name, task) {
    // saves a task for a given person
    !(name in tasks) ? (tasks[name] = [task]) : tasks[name].push(task);
    if (!tasks[name][tasks[name].length - 1].hasOwnProperty('complete')) {
      tasks[name][tasks[name].length - 1]['complete'] = false;
    }
  },
  list: function(name) {
    return tasks[name];
  },
  complete: function(name, taskNum) {
    tasks[name][taskNum]['complete'] = true;
  },
  remove: function(name, taskNum) {
    tasks[name].splice(taskNum, 1);
    return `task ${taskNum}`;
  },
};
