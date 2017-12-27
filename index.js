#! /usr/bin/env node

const path = require('path');

const tasks = [
  require('./tasks/directory'),
  require('./tasks/skelton'),
  require('./tasks/npm'),
];

function init() {
  let target = getTargetDirectory();
  let projectName = getProjectName(target);

  tasks.forEach((task) => {
    task(target, projectName);
  });
}

function getTargetDirectory() {
  if (process.argv[2]) {
    return path.join(process.cwd(), process.argv[2]);
  } else {
    return process.cwd();
  }
}

function getProjectName(target) {
  return path.parse(target).base;
}

init();
