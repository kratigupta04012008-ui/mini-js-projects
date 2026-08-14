let x;
let count=0;
let button=document.querySelector(".btn");
let ipt=document.querySelector(".input");
let result=document.querySelector(".result");
let attempt=document.querySelector(".attempts");
result.style.color="red";
attempt.style.color="pink";

let resetbtn = document.querySelector(".reset");

function init(){
  x=Math.floor(100*Math.random())+1;
  console.log(x);
  count=0;
  attempt.textContent="Attempts: 0";
  ipt.value='';
  ipt.disabled=false;
  button.disabled=false;
  resetbtn.style.display='none';
  result.textContent='';
  ipt.focus();
}

function checkGuess(){

  if(ipt.value === isNaN || ipt.value<1 || ipt.value>100){
    result.textContent = "⚠️ Please enter a number between 1 and 100!";
    return;
  }

  count++;

  if(ipt.value>x){
    result.textContent="Too High! Try a lower number.";
    attempt.textContent=`Guesses taken: ${count}`;
  }else if(ipt.value<x){
    result.textContent="Too Low! Try a higher number.";
    attempt.textContent=`Guesses taken: ${count}`;
  }else if(ipt.value==x){
    result.textContent=`Congratulations! You guessed it in ${count} attempts!`;
    endGame();
  }

  if(count>=10){
    result.textContent=`💥 Game Over! You ran out of attempts. The secret number was ${x}.`;
    endGame();
    return;
  }

  ipt.value='';
  ipt.focus();
}

function endGame(){
  ipt.disabled=true;
  button.disabled=true;
  resetbtn.style.display='inline-block';
}

button.addEventListener("click",checkGuess);
ipt.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter'){
    checkGuess();
  }
})

resetbtn.addEventListener('click',init);

init();