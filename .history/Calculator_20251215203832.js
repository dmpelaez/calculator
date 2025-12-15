let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .innerHTML = Number(answer);

};


document.querySelector('.cancel')
.addEventListener('click', () => {
  answer -= answer;

  document.querySelector('.inputSection')
  .innerHTML = Number(answer);
})

