const body = document.body;

const background = ["배경1.jpg","배경2.jpg","배경3.jpg","배경4.jpg","배경5.jpg","배경6.jpg","배경7.jpg","배경8.jpg","배경9.jpg","배경10.jpg","배경11.jpg","배경12.jpg"];

const randomIndex = Math.floor(Math.random()*background.length);


function makeUrl(){
  return `url('./image/${background[randomIndex]}')
  no-repeat center center`
}

body.style.background = makeUrl();
