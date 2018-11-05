const element = document.querySelector('.penguin')
// const style = getComputedStyle(element).getPropertyValue("--penguin-skin");
// element.style.setProperty("--penguin-skin", "red");

function changeColor() {
  var x = Math.floor((Math.random() * 255));
  var y = Math.floor((Math.random() * 255));
  var z = Math.floor((Math.random() * 255));
  
  var color="rgb(" + x + "," + y + "," + z + ")";
  // var color1="rgb(" + y + "," + z + "," + x + ")";
  var color2="rgb(" + z + "," + x + "," + y + ")";

  console.log(color);
  element.style.setProperty("--penguin-skin", color);
  // element.style.setProperty("--penguin-belly", color1);
  element.style.setProperty("--penguin-beak", color2);
}

setInterval(changeColor, 2000); 
// console.log(style);