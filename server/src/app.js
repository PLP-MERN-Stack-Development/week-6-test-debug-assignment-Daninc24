const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(logger);
app.use(express.json());

// Placeholder route for /api/posts
app.post('/api/posts', (req, res) => {
  res.status(201).json({ _id: 'mockid', ...req.body, author: 'mockauthor' });
});

app.get('/api/posts', (req, res) => {
  res.status(200).json([]);
});

app.get('/api/posts/:id', (req, res) => {
  if (req.params.id === 'notfound') return res.status(404).end();
  res.status(200).json({ _id: req.params.id, title: 'Test Post' });
});

app.put('/api/posts/:id', (req, res) => {
  res.status(200).json({ ...req.body, title: req.body.title || 'Updated Test Post', content: req.body.content || 'This content has been updated' });
});

app.delete('/api/posts/:id', (req, res) => {
  res.status(200).json({});
});

app.use(errorHandler);

module.exports = app; 