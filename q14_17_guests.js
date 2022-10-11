//================================================
//Question 14
let guestList = ["Zulekha", "Wafa", "Iqra"]
function sendInvitation() {
  guestList.forEach (element => console.log("Hey", element, "Please join me on dinner this weekend. I would love to have you around."));
}
sendInvitation();

//================================================
//Question 15
let personNotComing = "Zulekha"
console.log("Sadly,", personNotComing, "is not able to join us");
guestList.forEach ((name, index) => {
  if(name == personNotComing) {
    guestList[index] = "Mehak";
  }
  console.log("I would like to meet you on the dinner", name, ". I hope you can join.");
});

//================================================
//Question 16
console.log("Hey friends! I've found a bigger table for the dinner. Let me invite someone else too.")
guestList.unshift("Ahsan");
guestList.splice(guestList.length/2, 0, "Nazeer")
guestList.push("Bilal");

sendInvitation();

//================================================
//Question 17
console.log("Sorry friends! My table hasn't arrived yet. So, I can only invite two people.")

for(let x = guestList.length - 1; x >= 2; x--) {
  console.log("Sorry", guestList[x], "I can't invite you to dinner.");
  guestList.pop();
}

sendInvitation();
guestList = [];
console.log("Empty guestList:", guestList);
