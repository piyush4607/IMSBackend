const mongoose = require('mongoose');

const internshipOpenSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  stipend: {
    type: Number,
    required: true
  },
  students:[
    {
        type: String
    }
  ]
});

const Internship = mongoose.model('Internship', internshipOpenSchema);

module.exports = Internship;
