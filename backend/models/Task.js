const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do',
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },

}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;