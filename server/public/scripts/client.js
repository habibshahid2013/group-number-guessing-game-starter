$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $('#submitBtn').on('click', addGuesses)

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
    
  })
}