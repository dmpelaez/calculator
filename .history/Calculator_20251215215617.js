
let answer = 0;



function appendNumber(num) {
  answer += num;

  
   document.querySelector('.inputSection')
  .value += answer;

  return;
};

function appendOperation(sign) {
  document.querySelector('.inputSection')
  .value += sign;
}

function appendValue() {

  const result = eval(document.querySelector('.inputSection')
  .value);

  document.querySelector('.inputSection')
  .value = Number(result);

};

appendValue() = 0;





document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



