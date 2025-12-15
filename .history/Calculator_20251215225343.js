
let answer = '';



function appendNumber(num) {
  answer += num;


document.querySelector('.inputSection')
.value += answer;

};


document.querySelector('.cancel')
.addEventListener('click', () => {
  answer = '';
  document.querySelector('.inputSection')
.value = answer;
})





