//================================================
//Question 26
function colorMessage(color) {
  if(color == "green") {
    console.log("Congrats! you earned 5 points!");
  }
  else {
    console.log("Congrats! you earned 10 points!");
  }
}
//color = green
let alienColor = "green";
colorMessage(alienColor);

//color != green
alienColor = "red";
colorMessage(alienColor);
