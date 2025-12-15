
let answer = 0;
let justCalculated = false;
let result = eval(document.querySelector('.inputSection').value);


function appendNumber(num) {
  answer += num;
   document.querySelector('.inputSection')
  .value = answer;

  console.log(answer);
  return;
};



function appendValue() {
   document.querySelector('.inputSection').value = result;


};

document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



