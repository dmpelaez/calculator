let answer = 0;

function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .innerHTML = answer;
  console.log(answer);
  
  document.querySelector('.equal')
  .addEventListener('click', () => {
    eval(answer);
  });
    document.querySelector('.inputSection')
  .innerHTML = answer;
};




document.querySelector('.cancel')
.addEventListener('click', () => {
 
  answer = 0
  document.querySelector('.inputSection')
  .innerHTML = '';
})

