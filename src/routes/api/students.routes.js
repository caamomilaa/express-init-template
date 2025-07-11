// /api/students
const router = require("express").Router();

const StudentsController = require('../../controllers/students.controller')

router.get('/', StudentsController.getAll);

router.post('/', StudentsController.create);

router.put('/:studentId', StudentsController.edit);

router.delete('/:studentId', StudentsController.remove);

module.exports = router;