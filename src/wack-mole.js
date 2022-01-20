const squares = document.querySelectorAll(".square");
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let currentTime = 60;
let hitPosition = null;
let result = 0;

function randomSquare(){
  squares.forEach(square => {
    square.classList.remove('mole')
  });
  let squarePosition = squares[Math.floor(Math.random() * 9)];
  squarePosition.classList.add('mole');
  hitPosition = squarePosition.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if(square.id === hitPosition){
      result += 1;
      score.textContent = result;
    }
  })
})

function moveMole(){
  let timerId = null
  timerId = setInterval(randomSquare, 500);
}
moveMole()

function countDown(){
  currentTime--
  timeLeft.textContent = currentTime;
  if(currentTime == 0){
    clearInterval(timerId)
    alert('GAME OVER your result is:'+ result );
    currentTime = 60;
  }
}
let timerId = setInterval(countDown, 1000);