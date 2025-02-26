const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
    title: String,
    items: [{ description: String, completed: Boolean }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Checklist', ChecklistSchema);
