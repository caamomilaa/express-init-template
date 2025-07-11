const Teacher = require('../models/teachers.model');

const getAll = async (req, res) => {
    const teachers = await Teacher.find();
    res.json(teachers);
}

const getById = (req, res) => {
    const { teacherId } = req.params;

    res.json(`Recupero el profesor con id ${teacherId}`);
}

const create = async (req, res) => {
    try {
        const newTeacher = await Teacher.create(req.body);
        res.json(newTeacher);
    } catch (error) {
        console.log(error.errors.first_name);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getAll, getById, create }