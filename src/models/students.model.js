const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
    name: String,
    surname: String,
    phone: String,
    email: String
}, { timestamps: true, versionKey: false });

const Student = model('student', studentSchema);
module.exports = Student;