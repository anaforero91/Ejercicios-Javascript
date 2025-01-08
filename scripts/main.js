/** */
// 1.Suma de dos números


function suma(){
    let num1 = Number(prompt("Escriba un número: "));
    let num2 = Number(prompt("Escriba un número: "));
    resultado = num1 + num2;
    document.getElementById("resultadoEJ1").innerText = "El resultado de la suma es = " + resultado;
}

//2. Numero Par o Impar
function numeroParImpar(){
    let num = Number(prompt("Escriba un número: "));
    let resultado = '';
    if((num%2) === 0){
        resultado = 'El numero es par'
    }else{
        resultado = 'El numero es impar'
    }
    document.getElementById("resultadoEJ2").innerText = resultado;
}