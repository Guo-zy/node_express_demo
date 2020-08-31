const todoList = require('../entity/todoList');

class ToDoListService {
  create(data) {
    return todoList.create(data);
  }
  findAll() {
    return todoList.find();
  }
  findById(id) {
    return todoList.findById(id);
  }
  deleteById(id) {
    return todoList.findByIdAndRemove(id);
  }
  updateById(data) {
    return todoList.findByIdAndUpdate(data._id, {
      ...data,
    });
  }
}

module.exports = new ToDoListService();
