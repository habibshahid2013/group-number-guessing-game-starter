const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

/* function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
*/

//create variable to run RandomNumber Function
let number = randomNumber(0, 24)

function randomNumber(min, max){
 return Math.random() * (max - min) + min;
};

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here




app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
