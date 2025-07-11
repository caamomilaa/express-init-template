const Student = require('../models/students.model');

const getAll = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

const create = async (req, res) => {
    // req.body - name, surname, phone, email
    const { name, surname, phone, email } = req.body;
    if (!name || !surname || !phone || !email) {
        return res.status(400).json({ message: 'Falta un dato' })
    }

    const newStudent = await Student.create(req.body);
    res.json(newStudent);
}

const edit = async (req, res) => {
    // req.body - name, surname, phone, email
    // req.params - studentId
    const { studentId } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        req.body,
        { new: true }
    );

    res.json(updatedStudent);
}

const remove = async (req, res) => {
    const { studentId } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    res.json(deletedStudent);
}

module.exports = {
    getAll, create, edit, remove
}