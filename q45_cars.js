function car_object(manufacturer, model, ...kwargs) {
  let car = new Object({manufacturer: manufacturer, model: model});
  for(const [key, value] of Object.entries(kwargs)){
    car = {...car, ...value}
 }

  return car;
}

console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", {'color': 'black'}, {'seats': 7}));
