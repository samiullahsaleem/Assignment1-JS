let usernames = ["Ahmed", "Hassaan", "Admin", "Danish", "Abeeha"]
usernames.forEach(function (name) {
  if (name == "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  }
  else {
    console.log("Hi " + name + ", thank you for logging in again");
  }
})

usernames = [];
if (usernames.length <= 0) {
  console.log("We need to find some users!")
}
