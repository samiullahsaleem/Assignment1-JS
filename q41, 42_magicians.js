//================================================
//Question 41
function show_magicians(magiciansArr) {
  magiciansArr.forEach((magician) => {
    console.log(magician);
  });
}
magicians = ["Aladdin", "David", "Lalisar", "John"]
show_magicians(magicians);

//================================================
//Question 42
function make_great(magiciansArr) {
  magiciansArr.forEach((name, index) => {
    magiciansArr[index] = 'The Great ' + name
  });
}
make_great(magicians);
show_magicians(magicians);
