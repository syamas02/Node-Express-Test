'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function() {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function() {
    // returns an array of all people for whom tasks exist
    return Object.keys(tasks);
  },

  add: function(name, task) {
    // saves a task for a given person
    !(name in tasks) ? (tasks[name] = [task]) : tasks[name].push(task);
    if (!tasks[name][tasks[name].length - 1].complete) {
      tasks[name][tasks[name].length - 1].complete = false;
    }
    return tasks[name][tasks[name].length - 1];
  },

  list: function(name) {
    return tasks[name];
  },

  complete: function(name, index) {
    tasks[name][index].complete = true;
  },
  remove: function(name, index) {
    if (index >= 0 && index < tasks[name].length && name in tasks) {
      tasks[name].splice(index, 1);
    }
  },
};
