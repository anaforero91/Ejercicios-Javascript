/** */
// 1.Suma de dos números
let num1 = Number(prompt("Escriba un número: "))
let num2 = Number(prompt("Escriba un número: "))

function suma(num1, num2){
    result = num1 + num2;
    return "El resultado de la suma es = " + result;
}

document.getElementById("resultado").innerText = suma(num1, num2);