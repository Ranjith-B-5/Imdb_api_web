const path = require('path');
const express = require("express");
const fetch = require('node-fetch');

const app = express();

const PORT = process.env.PORT || 3001;

// const url = 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0441ed7b34mshb1e1bf46c8883d3p18ffd2jsnae9ded16ec3b',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };

// async function getdetails()
// {
// const res = await fetch(url, options)
// 	const json_data = await res.json();
// 	console.log(json_data);
//   return json_data;
// }

// const movie_details = getdetails();
  
app.use(express.static(path.join(__dirname, '../frontend/build')));


// app.get('/', (req, res) => {
//     console.log(movie_details);
//     res.send(movie_details);
// });




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
