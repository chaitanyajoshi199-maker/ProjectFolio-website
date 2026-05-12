let x = document.getElementById("inp1");
let y = document.getElementById("inp3");
let operator = document.getElementById("inp2");
let q = document.getElementById("btnx");
let p = document.getElementById("ans");

console.log(x)

function calculate() {
    let num1 = parseFloat(x.value);
    let num2 = parseFloat(y.value);
    let sign = operator.value;

    if (sign === "+") {
        return (num1 + num2).toFixed(1);
    }
    else if (sign === "-") {
        return (num1 - num2).toFixed(1);
    }
    else if (sign === "*") {
        return (num1 * num2).toFixed(1);
    }
    else if (sign === "/") {
        return (num1 / num2).toFixed(1);
    }
    else if (sign === "%") {
        return (num1 % num2).toFixed(1);
    }
    else {
        return `Invalid Sign!`
    }
}
function result() {
      q.style.display = "none"
    p.innerHTML = calculate();

    p.style.display = "block"
}
q.addEventListener("click", result);



