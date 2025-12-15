
let answer = '';



function appendNumber(num) {
  answer += num;

if (Error) {
document.querySelector('.inputSection')
.value = 0;
}
document.querySelector('.inputSection')
.value = answer;

};


document.querySelector('.cancel')
.addEventListener('click', () => {
  answer = '';
  document.querySelector('.inputSection')
.value = answer;
})


function runback() {
document.querySelector('.signs')
.addEventListener('click', () => {
  const value = document.querySelector('.inputSection').value.slice(0, -1);

  document.querySelector('.inputSection').value = value;
});
};


