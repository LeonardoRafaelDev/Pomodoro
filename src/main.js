let tittleWork = document.getElementById("work");
let tittleBreak = document.getElementById("break");

let timeWork = 10;
let timeBreak = 5;

let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = timeWork;
  document.getElementById("seconds").innerHTML = seconds;

  tittleWork.classList.add("active");
};

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";
  document.getElementById("pause").style.display = "block";
  document.getElementsByClassName("starttext")[0].style.display = "block";
  seconds = 59;

  let workMinutes = timeWork - 1;
  let breakMinutes = timeBreak - 1;

  breakCount = 0;

  // contador
  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
      workMinutes = workMinutes - 1;
      if (workMinutes === -1) {
        if (breakCount % 2 === 0) {
          // fazer comecar descanso
          workMinutes = breakMinutes;
          breakCount++;

          tittleWork.classList.remove("active");
          tittleBreak.classList.add("active");
        }
        //fazer continaur trampo
        workMinutes = timeWork;
        breakCount++;

        tittleBreak.classList.remove("active");
        tittleWork.classList.add("active");
      }
      seconds = 59;
    }
  };

  function pause() {
    //fazer funcao que para o timer
  }

  //fazer funcao que comeca o timer
  setInterval(timerFunction, 1000); // 1000 = 1s
}
