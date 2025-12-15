
let answer = 0;

let currentInput = '3s';
let currentOperation = '2';
let previousInput = '1';


function appendNumber(num) {
  answer += num;

  
   document.querySelector('.inputSection')
  .value = `${previousInput} ${currentOperation} ${currentInput}`;


  
  return;
};





document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



