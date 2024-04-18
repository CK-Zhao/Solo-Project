const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.post('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../main.html'));
});

app.get('/signup', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../signup.html'))
);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
module.exports = app;
