let score = JSON.parse(localStorage.getItem('score'))
||  {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };

updateScore();

let resetbtn = document.querySelector(".reset-button");
resetbtn.addEventListener("click",function(){
  score.Wins=0;
  score.Losses=0;
  score.Ties=0;
  localStorage.removeItem('score');
  updateScore();
  moves.innerHTML='';
})

let moves = document.querySelector(".js-moves");
let result = document.querySelector('.js-result');
let score = document.querySelector('.js-score');


function pickComputerMove(){
  let computerMove='';
  const rannum=Math.random();
  if(0<=rannum && rannum <(1/3)){
    computerMove='rock';
  }else if((1/3)<=rannum && rannum<(2/3)){
    computerMove='paper';
  }else{
    computerMove='scissors';
  }
  return computerMove;
}

function playGame(playerMove){
  computerMove = pickComputerMove();
  result='';
  if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result='You lose.'
    }else if(computerMove==='paper'){
      result='You win.'
    }else if(computerMove==='scissors'){
      result='Tie.'
    }

  }else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You win.'
    }else if(computerMove==='paper'){
      result='Tie.'
    }else if(computerMove==='scissors'){
      result='You lose.'
    }
    
  }else{
    if(computerMove==='rock'){
      result='Tie.'
    }else if(computerMove==='paper'){
      result='You lose.'
    }else if(computerMove==='scissors'){
      result='You win.'
    }
  }

  if(result==='You win.'){
    score.Wins+=1;
  }else if(result==='You lose.'){
    score.Losses+=1;
  }else{
    score.Ties+=1;
  }

  // have to store in localStorage so while refreshing the page scores doesn't get reset.
  localStorage.setItem('score',JSON.stringify(score));

  updateScore();

  result.innerHTML = result;
  moves.innerHTML = `You <img src="${playerMove}-emoji.png" class="img-icon">
<img src="${computerMove}-emoji.png" class="img-icon"> Computer`;
}

function updateScore(){
  score.innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}