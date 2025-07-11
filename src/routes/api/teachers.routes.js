const router = require('express').Router();

const { getAll, getById, create } = require('../../controllers/teachers.controller');

router.get('/', getAll);
router.get('/:teacherId', getById);

router.post('/', create);

module.exports = router;