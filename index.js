// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAddCat(cat) {
  cats.push(cat);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function addCat(cat) {
  return [...cats, cat];
}
function removeLastCat() {
  return cats.slice(0, -1);
}
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    return [name, ...cats];
  }
  function removeFirstCat() {
    return cats.slice(1);
  }