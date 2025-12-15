let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .innerHTML = answer;

  document.querySelector('.cancel')
.addEventListener('click', () => {
  answer -= num;
  console.log(answer);
})
};

