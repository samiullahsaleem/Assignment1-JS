//================================================
//Question 27
function colorMessage(color) {
  if(color == "green") {
    console.log("Congrats! you earned 5 points!");
  }
  else if(color == "yellow") {
    console.log("Congrats! you earned 10 points!");
  }
  else if(color == "red") {
    console.log("Congrats! you earned 15 points!");
  }
}
//color = green
let alienColor = "green";
colorMessage(alienColor);

//color =  yellow
alienColor = "yellow";
colorMessage(alienColor);

//color =  red
alienColor = "red";
colorMessage(alienColor);
