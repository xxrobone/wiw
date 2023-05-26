const express = require('express');
const cors = require('cors');

// Importing movies routes
const movies = require('./routes/movies');

const app = express();
const port = 5000;

// adding cors to get rid of the cors policy
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

const validApiKey = '5';

const authCheck = (req, res, next) => {
  const apikey = req.query.apikey;
  console.log(req.query);
  if (!apikey) {
    return res
      .status(401)
      .send({ message: "Can't connect to server, No api key", code: 401 });
  }

  if (apikey !== validApiKey) {
    return res.status(403).send({ message: 'invalid api key' });
  }

  next();
};

app.use((req, res, next) => {
  authCheck(req, res, next);
  next();
});


app.get('/', (req, res) => {
  res.send('Welcome to whatiwatch api!');
});

app.use('/movies', movies);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
