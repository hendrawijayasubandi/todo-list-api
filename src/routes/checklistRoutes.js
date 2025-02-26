const express = require('express');
const { createChecklist, getChecklists } = require('../controllers/checklistController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();
router.post('/', authenticateToken, createChecklist);
router.get('/', authenticateToken, getChecklists);

module.exports = router;
