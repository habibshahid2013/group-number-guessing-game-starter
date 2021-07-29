$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

 $('#submitBtn').on('click', addGuesses)
  getTargetValue();
}

function getTargetValue(){


  $.ajax({

    method: 'GET',
    url: '/guessme'
  }).then(function(response){
      console.log('test GET /guessme', response);

    let targetValue = $('#headerId');
      // targetValue.empty
      // targetValue.append(`
      //  <span> ${response.randomValue}</span>`)
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
      url: '/guessme'

  }).then(function(response){
    console.log('POST /guessme element', response);
    $('#guesses').append(`
    <li>${guessInputs.hassan}</li>
    <li>${guessInputs.farah}</li>
    <li ${guessInputs.garrett}</li>
    <li>${guessInputs.eben}</li>
    `)
  })
}