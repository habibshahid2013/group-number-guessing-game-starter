const express = require('express');
const bodyParser = require('body-parser');
//const { get } = require('jquery');
const app = express();
const PORT = 5000;

/* function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
*/

//create variable to run GetRandomNumber Function
// const randomNumber = getRandomNumber(0, 24)
// console.log('test random ', randomNumber);

let guessArray = [];
let object = {

  randomValue:  Math.round(getRandomNumber(1, 25))
};

function getRandomNumber(min, max){
 return Math.random() * (max - min) + min;
};



// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (5HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/guessme', function (req,res) {
  console.log('ready to send random number');
  console.log('request . route . path is', req.route.path);
  
  res.send(object);
});

app.post('/guessme', function(req, res){
  console.log('check guess me');
  //send back data to the client
  //array of quotes objects
  console.log('req.body', req.body); //req.body = guessInputs

  guessArray.push(req.body.hassan);
  
    //  $('#guesses').append(`
    //    <ul> 
    //    <li> ${req.body.hassan}</li>
    //    <li> ${req.body.garrett}</li>
    //    <li> ${req.body.eben}</li>
    //    <li> ${req.body.farah}</li>
    //    </ul>`);

  res.send('see this is working 😆');

} );



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
