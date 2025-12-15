let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .innerHTML = answer;
  console.log(answer);

};


document.querySelector('.cancel')
.addEventListener('click', () => {
 

  document.querySelector('.inputSection')
  .innerHTML = '';
})

