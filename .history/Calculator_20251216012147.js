
let answer = '';


function appendNumber(num) {
  answer += num;

  document.querySelector('.inputSection')
  .value = answer;
};


document.querySelector('.cancel')
.addEventListener('click', () => {
    answer = 0;
    document.querySelector('.inputSection')
    .value = answer;
})

document.querySelector('.signs')
.addEventListener('click', () => {
  const value = document.querySelector('.inputSection').value.slice(0, -1);
  document.querySelector('.inputSection').value = value;
  answer = value;

});


function equal() {
  document.querySelector('.equal')
  .addEventListener('click', () => {
    try {
      answer = eval(answer);
      document.querySelector('.inputSection').value = answer;
    } catch {
      document.querySelector('.inputSection').value = "Error";
    } 
    if (answer === undefined) {
      answer = '';
    }
  });
};




