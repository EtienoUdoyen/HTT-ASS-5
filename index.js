document.getElementById("html").addEventListener("click", (e) =>{e.preventDefault();
    alert("you clicked html");
});

document.getElementById("css").addEventListener("click", (e) =>{e.preventDefault();
    alert("you clicked css");
});

const numbers = [1, 2, 3, 4, 8, 90, 34, 15, 67, 23, 63, 24, 78, 54, 10, 30, 45, 70, 31, 87, 33, 55, 23];

document.getElementById("original").textContent = numbers.join(",");

const doubled = numbers.map((num) => num * 2);
document.getElementById("mapped").textContent = doubled.join(",");

function addFour(arr) {
    return arr.map(num => num + 4);
}
const step1 = addFour(numbers);
document.getElementById("step1").innerText = step1.join(",");

function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}
const step2 = filterOdd(step1);
document.getElementById("step2").innerText = step2.join(",");

function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
const step3 = sumNumbers(step2);
document.getElementById("step3").innerText = step3;

// const filtered = numbers.filter((num) => num > 3);
// document.getElementById("filtered").textContent = filtered.join(",");

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// document.getElementById("reduced").textContent = sum;