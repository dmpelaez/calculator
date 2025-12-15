
let answer = 0;
let justCalculated = false;

function appendNumber(num) {
  answer += num;
  

  console.log(answer);
  return;
};

 document.querySelector('.inputSection')
  .value = answer;

function appendValue() {
  const result = eval(document.querySelector('.inputSection').value);
   document.querySelector('.inputSection').value = Number(result);
}

document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})

