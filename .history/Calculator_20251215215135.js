
let answer = 0;



function appendNumber(num) {
  answer += num;

  
   document.querySelector('.inputSection')
  .value = answer;

  return;
};

function appendOperation(sign) {
  document.querySelector('.inputSection')
  .value = sign;
}





document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



