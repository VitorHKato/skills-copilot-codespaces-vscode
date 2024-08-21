// Create web server
// Create a route for POST request
// Create a route for GET request
// Create a route for DELETE request
// Create a route for PUT request

const express = require('express');
const app = express();

app.use(express.json());

let comments = [
    { id: 1, author: 'John', content: 'Hello' },
    { id: 2, author: 'Jane', content: 'Hi' },
    { id: 3, author: 'Doe', content: 'Hey' }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('Comment not found');
    res.json(comment);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        author: req.params.author,
        content: req.params.content
}});
