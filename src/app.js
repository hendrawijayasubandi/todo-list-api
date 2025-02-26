const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const checklistRoutes = require('./routes/checklistRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/checklists', checklistRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
