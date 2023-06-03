import express from 'express';
// const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  // res.status(200);
  res.send('hello from backend to frontend!');
});

app.post('/weather', (req, res) => {
  try {
    const submittedCityName = req.body.cityName;
    res.set('Content-Type', 'application/json');
    res.send(`You submitted: ${submittedCityName}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Internal server error`);
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
