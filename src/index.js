const express = require('express');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json([
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ]);
});

app.post('/courses', (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json([
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ]);
});

app.put('/courses/:id', (req, res) => {
  const params = req.params;
  console.log(params);
  return res.json([
    { id: 1, name: 'Curso 6' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ]);
});

app.patch('/courses/:id', (req, res) => {
  return res.json([
    { id: 1, name: 'Curso 7' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ]);
});

app.delete('/courses/:id', (req, res) => {
  return res.json([
    { id: 1, name: 'Curso 7' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ]);
});


app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});