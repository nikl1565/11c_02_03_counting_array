"use strict";

const arr = [];
let counter = 0;

window.addEventListener("load", initCounter);

function initCounter() {
    arr.unshift(counter);
    counter++;

    if (counter > 9) {
        arr.pop(arr);
    }

    console.log(arr);

    setTimeout(initCounter, 500);
}
