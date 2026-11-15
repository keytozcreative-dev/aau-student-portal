const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    default: 0.0,
  },
  financials: {
    totalRequired: { type: Number, default: 0 },
    paid: { type: Number, default: 0 },
  },
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;