const Checklist = require('../models/checklistModel');

exports.createChecklist = async (req, res) => {
    const newChecklist = new Checklist({ title: req.body.title, items: [], user: req.user.id });
    await newChecklist.save();
    res.json(newChecklist);
};

exports.getChecklists = async (req, res) => {
    const checklists = await Checklist.find({ user: req.user.id });
    res.json(checklists);
};
