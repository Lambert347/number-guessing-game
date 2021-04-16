const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let min = 1;
let max = 25;
let randomNumber = 0;
let inGuess = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/guess', (req, res) => {
  inGuess = req.body;
  console.log('inGuess');
  compareNumbers(inGuess);
  res.sendStatus(201);
});

app.get('/guess', (req, res) => {
  console.log ('Request for output...', inGuess);
  res.send(inGuess);
});



function randomNumberGen() {
  randomNumber = Math.floor(Math.random() * (1 + max - min) + min);
}

function compareNumbers(array){
  if (randomNumber === 0) {
    randomNumberGen();  
  };
  for (let i = 0; i < array.length; i++){
    if (array[i].value === randomNumber){
      alert('WINNER');
    }
    else if (array[i].value < randomNumber){
      array[i].history.push({number: array[i].value, answer: "Low"});
    }
    else if (array[i].value > randomNumber){
      array[i].history.push({number: array[i].value, answer: "High"});
    }
  }
}

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT);
})
