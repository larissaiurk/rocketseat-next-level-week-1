import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Diego',
    'Felipe',
    'Larissa',
    'Rocketee'
  ])
});

app.listen(3333);