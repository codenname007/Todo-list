const clock = document.querySelector("#clock")


function makeClock(){
  const date = new Date();
  const hour = date.getHours()
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clock.innerText = `${makeForm(hour)}: ${makeForm(minute)}: ${makeForm(second)}`;
}

function makeForm(element){
  return element.toString().padStart(2, "0");
}

makeClock();
setInterval(makeClock, 1000);
