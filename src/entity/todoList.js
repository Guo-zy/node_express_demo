const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  content: String,
  isFinished: Boolean,
  name: String,
  date: String,
  tag: String,
});

const model = {
  User: mongoose.model('user', userSchema),
};

module.exports = model.User;
