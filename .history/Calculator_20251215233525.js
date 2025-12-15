
let answer = '';



function appendNumber(num) {
  answer += num;

document.querySelector('.inputSection')
.value = answer;

};


document.querySelector('.cancel')
.addEventListener('click', () => {
  answer = '';
  document.querySelector('.inputSection')
.value = answer;
})

document.querySelector('.cancel')
.addEventListener('click', () => {
const value = document.querySelector('.inputSection').value.slice(0, -1);
document.querySelector('.inputSection').value = value;
answer = value;

});





