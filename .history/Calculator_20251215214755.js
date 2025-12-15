
let answer = 0;

let currentInput = '';
let currentOperation = '';
let previousInput = '';


function appendNumber(num) {
  answer += num;

  
   document.querySelector('.inputSection')
  .value = `${previousInput} ${currentOperation} ${currentInput}`;


  console.log(answer);
  return;
};





document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



