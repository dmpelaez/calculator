let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .innerHTML = (answer);
};
console.log(appendNumber());

document.querySelector('.cancel')
.addEventListener('click', () => {
  answer -= answer;

  document.querySelector('.inputSection')
  .innerHTML = Number(answer);
})

