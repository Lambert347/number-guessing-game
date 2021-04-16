$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submit-button').on('click', guess);
}

function guess() {
  event.preventDefault();
  console.log('click');
  let player1 = $('#input1').val();
  let player2 = $('#input2').val();
  let player3 = $('#input3').val();
  let player4 = $('#input4').val();
  let array = [];
  
  let playerGuess = [{
      value: player1,
      history: array
    },

    {
      value: player2,
      history: array
    },

    {
      value: player3,
      history: array
    },

    {
      value: player4,
      history: array
    },
  ]

    $.ajax({
      method: 'POST',
      url: '/guess',
      data: playerGuess
    })
    .then( function (response) {
      console.log('response from server post...', response)
      getResponse();
    })
    .catch( function (error) {
      alert('You broke me');
      console.log('Dude your code doesn\'t work');
    })
  }



function getResponse(){
  $.ajax({
    method: 'GET',
    url: '/guess'
  })
  .then( function (response) {
console.log('response from server get...', response)
  })
  .catch( function (error) {
    alert('You broke me');
    console.log('Dude your code doesn\'t work');
  })
}
