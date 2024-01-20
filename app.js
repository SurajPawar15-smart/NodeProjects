const express = require("express");

const app = express();
app.use(express.json()); //middleware

const movies = [
  {
    id: 1,
    title: "Star Wars",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
  {
    id: 3,
    title: "The Godfather",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
  {
    id: 4,
    title: "Star Wars",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
  {
    id: 5,
    title: "Star Wars",
    year: 1977,
    rating: 8.6,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
  },
];
app.get("/", (req, res) => {
  res.send("Hello World from Suraj Pawar...!!!");
});

//Get all movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//get single movie data
app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    return res.status("The movie with the given ID was not found");
  }
  res.send(movie);
});

//post data
app.post("/api/movies", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1; //that why we using the middleware express.json
  movies.push(movie);
  res.send(movie);
});

//put data
app.put("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  movie.title = req.body.title;
  movie.year = req.body.year;
  movie.rating = req.body.rating;
  movie.actors = req.body.actors;
  res.send(movie);
});

//patch data
app.patch("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  //movie.title = req.body.title;
  movie.year = req.body.year;
  movie.rating = req.body.rating;
  //movie.actors = req.body.actors;
  res.send(movie);
});

//delete movies
app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const index = movies.indexOf(movie);
  movies.splice(index, 1);
  res.send(movie);
});

app.listen(3000, () =>
  console.log("Server is up and running on the port 3000")
);
