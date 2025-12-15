
let answer = 0;




function appendNumber(num) {
  answer += num;

  
   document.querySelector('.inputSection')
  .value = answer;


  console.log(answer);
  return;
};




document.querySelector('.cancel')
.addEventListener('click', () => {
  
  document.querySelector('.inputSection')
  .value = '';
 
})



