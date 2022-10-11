function show_magicians(magiciansArr) {
  magiciansArr.forEach((magician) => {
    console.log(magician);
  });
}
magicians = ["Aladdin", "David", "Lalisar", "John"]

function make_great(magiciansArr) {
  arr = [];
  magiciansArr.forEach((name, index) => {
    arr[index] = 'The Great ' + name
  });
  return arr;
}
new_arr = make_great(magicians);

console.log("Original: ");
show_magicians(magicians);
console.log("New Array: ");
show_magicians(new_arr);
