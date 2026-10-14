const Note = require('../models/NotesModel');
const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = express.Router();

const payload = (req) => req.body.content;
const validId = (id) => mongoose.isValidObjectId(id);
const handleError = (res, error) => res.status(error.name === 'ValidationError' ? 400 : 500).json({ message: error.message });

// Create a note
noteRoutes.post('/notes', async (req, res) => {
  if (!payload(req) || typeof payload(req) !== 'object' || Array.isArray(payload(req))) {
    return res.status(400).json({ message: 'Note content can not be empty' });
  }
  try {
    const note = await Note.create(payload(req));
    res.status(201).json(note);
  } catch (error) { handleError(res, error); }
});

// Retrieve all notes
noteRoutes.get('/notes', async (req, res) => {
  try { res.json(await Note.find()); }
  catch (error) { handleError(res, error); }
});

// Retrieve a single note
noteRoutes.get('/notes/:noteId', async (req, res) => {
  if (!validId(req.params.noteId)) return res.status(400).json({ message: 'Invalid note ID' });
  try {
    const note = await Note.findById(req.params.noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) { handleError(res, error); }
});

// Update a note
noteRoutes.put('/notes/:noteId', async (req, res) => {
  if (!validId(req.params.noteId)) return res.status(400).json({ message: 'Invalid note ID' });
  if (!payload(req) || typeof payload(req) !== 'object' || Array.isArray(payload(req))) {
    return res.status(400).json({ message: 'Note content can not be empty' });
  }
  try {
    const changes = { ...payload(req), dateUpdated: new Date().toLocaleDateString('en-GB') };
    delete changes._id;
    const note = await Note.findByIdAndUpdate(req.params.noteId, changes, { new: true, runValidators: true });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (error) { handleError(res, error); }
});

// Delete a note
noteRoutes.delete('/notes/:noteId', async (req, res) => {
  if (!validId(req.params.noteId)) return res.status(400).json({ message: 'Invalid note ID' });
  try {
    const note = await Note.findByIdAndDelete(req.params.noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted successfully' });
  } catch (error) { handleError(res, error); }
});

module.exports = noteRoutes;
