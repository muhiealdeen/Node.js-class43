import express from 'express';
// const express = require('express');
import keys from './sources/keys.js';
import fetch from 'node-fetch';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  // res.status(200);
  res.send('hello from backend to frontend!');
});

app.post('/weather', async (req, res) => {
  const { cityName } = req.body;
  console.log(req.body);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}`,
  );
  const data = await response.json();
  console.log(data);
  if (data.code === '404') {
    res.status('404').json({ westher: 'City not found' });
  } else {
    const teperature = data.main.temp;
    res
      .status(200)
      .json({ Weather: `Temperature in ${cityName}:${teperature}` });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port:${port}`);
});
