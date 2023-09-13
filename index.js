// // Write your solution here!
// const cats = [
//     "Milo",
//     "Otis",
//     "Garfield",
// ];

// function destructivelyAppendCat(name) {
//     return cats.push("Ralph");
// };

// function destructivelyPrependCat(name) {
//     return cats.unshift("Bob");
// };

// function destructivelyRemoveLastCat() {
//     return cats.pop();
// };

// function destructivelyRemoveFirstCat() {
//     return cats.shift();
// };

// function appendCat(name) {
//     return [...cats, "Broom"];
// };

// function prependCat(name) {
//     return ["Arnold", ...cats];
// };

// function removeLastCat() {
//     return cats.slice(0, cats.length -1);
// };

// function removeFirstCat() {
//     return cats.slice(1);
// };



const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(newCat) {
    let newCats = [...cats, newCat]
    return newCats
}

function prependCat(newCat) {
    let newCats = [newCat, ...cats]
    return newCats
}

function removeLastCat() {
    let newCats = cats.slice(0, -1)
    return newCats
}

function removeFirstCat() {
    let newCats = cats.slice(1)
    return newCats
}