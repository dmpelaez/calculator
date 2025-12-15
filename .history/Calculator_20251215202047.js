let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.cancel')
.addEventListener('click', () => {
  answer += num;
  console.log(answer);

})

  document.querySelector('.inputSection')
  .innerHTML = Number(answer);
};

