
let answer = 0;

function appendNumber(num) {
  answer += num;
  console.log(answer);
 document.querySelector('.inputSection')
  .value = answer;
  
};

function appendValue() {
  const result = eval(document.querySelector('.inputSection').value);
   document.querySelector('.inputSection').value = result;
}

document.querySelector('.cancel')
.addEventListener('click', () => {
  answer = 0;
  document.querySelector('.inputSection')
  .value = answer;
})

