// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Create a comments array
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  const newComment = { name, comment };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});