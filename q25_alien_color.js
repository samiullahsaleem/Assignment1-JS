//================================================
//Question 25
function colorMessage(color) {
  if(color == "green") {
    console.log("Congrats! you earned 5 points!");
  }
}
//success
let alienColor = "green";
colorMessage(alienColor);

//failure
alienColor = "red";
colorMessage(alienColor);
