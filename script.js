// entradas de dados

function calcularIMC(){
    let pesoKg = parseFloat(document.getElementById("peso").value);
    let alturaMetro = parseFloat(document.getElementById("altura").value);
  
    let valorIMC = (pesoKg / (alturaMetro * alturaMetro));
   

if (valorIMC < 25){
    console.log(document.getElementById("resultado").textContent = "Você está abaixo do seu peso ideal")
} else if (valorIMC >= 25 <= 30) {
    console.log(document.getElementById("resultadoUm").textContent = "Você está no seu peso ideal")
} else if (valorIMC > 30 < 35) {
    console.log(document.getElementById("resultadoDois").textContent = "Você está acima do seu peso ideal")
} else if (valorIMC > 35 < 40){
    console.log(document.getElementById("resultadotres").textContent = "Você apresenta sinais de obesidade")
} else { 
    console.log(document.getElementById("resultadoQuatro").textContent = "Você está obeso")
}}