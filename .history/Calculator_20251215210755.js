
let answer = 0;

function appendNumber(num) {
  answer += num;
  
 document.querySelector('.inputSection')
  .value = answer;
  console.log(answer);
  return;
};

function appendValue() {
  const result = eval(document.querySelector('.inputSection').value);
   document.querySelector('.inputSection').value = Number(result);
}

document.querySelector('.cancel')
.addEventListener('click', () => {
  answer = 0;
  document.querySelector('.inputSection')
  .value = answer;
 
})

