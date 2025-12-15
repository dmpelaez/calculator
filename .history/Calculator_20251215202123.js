let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.cancel')
.addEventListener('click', () => {
  answer -= num;
  console.log(answer);
  return;
})

  document.querySelector('.inputSection')
  .innerHTML = Number(answer);
};

