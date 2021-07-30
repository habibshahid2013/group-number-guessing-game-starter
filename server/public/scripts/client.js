$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
 getTargetValue();
 $('#submitBtn').on('click', addGuesses);
}

function getTargetValue(){


  $.ajax({

    method: 'GET',
    url: '/guessme'
  }).then(function(response){
      console.log('test GET /guessme', response);

    let targetValue = $('#guesses');
        $('#guesses').append(`
          <ul> 
          <li> ${response.hassan}</li>
          <li> ${req.body.garrett}</li>
          <li> ${req.body.eben}</li>
          <li> ${req.body.farah}</li>
          </ul>`);
  })
}


function addGuesses(){
  let guessInputs = {
    hassan: $('#hassanInput').val(),
    farah: $('#farahInput').val(),
    garrett: $('#garrettInput').val(),
    eben: $('#ebenInput').val()
  }

  $.ajax({
      method: 'POST',
      url: '/guessme',
      data: guessInputs
  }).then(function(response){
    console.log('POST /guessme element', response);
   
  })
}