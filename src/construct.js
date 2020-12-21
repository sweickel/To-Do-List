const Project = function (title) {
  this.title = title;
  this.tasks = [];
};

const Task = function (title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.status = "incomplete";
};

export { Project, Task };
