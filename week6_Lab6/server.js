const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27018/notes-app';
const PORT = process.env.PORT || 8081;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('<h1>Welcome to Note taking application - Week06 Exercise</h1>'));
app.use('/', noteRoutes);

mongoose.connect(DB_URL).then(() => {
  console.log('Successfully connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
}).catch(error => {
  console.error('Could not connect to MongoDB:', error.message);
  process.exit(1);
});
