const path = require('path');
const express = require("express");
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const url = 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

async function getdetails()
{
const res = await fetch(url, options)
	const json_data = await res.json();
	console.log(json_data);
  return json_data;
}

const movie_details = getdetails();
  
app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('/', (req, res) => {
    console.log(movie_details);
    res.send(movie_details);
});




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
