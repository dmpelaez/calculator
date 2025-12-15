let answer = 0;

function appendNumber(num) {
  answer += num;


  console.log(answer);
  
    document.querySelector('.inputSection')
  .innerHTML = answer;
};






document.querySelector('.cancel')
.addEventListener('click', () => {
 
  answer = 0;
  document.querySelector('.inputSection')
  .innerHTML = '';
})

