function sandwich_summary(...items) {
  console.log("A sandwich ordered with items: ")
  items.forEach((item) => console.log(item))
}

let items = ["pepperoni","cheese", "onions", "ham"]
sandwich_summary(...items);
items = ["mayo", "garlic", "cheese", "onions", "chicken", "cucember", "carrot"]
sandwich_summary(...items);
