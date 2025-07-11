const { model, Schema } = require('mongoose');

const teacherSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'El campo first_name es requerido']
    },
    last_name: String,
    age: {
        type: Number,
        min: 18,
        max: 65
    },
    available: Boolean
}, {
    timestamps: true, versionKey: false
});

const Teacher = model('teacher', teacherSchema);
module.exports = Teacher;