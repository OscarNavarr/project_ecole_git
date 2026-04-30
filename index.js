// codigo random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomNumber(min, max));
    }
    return arr;
}

console.log(randomNumber(1, 100));
console.log("-------------------");
console.log("-------------------");