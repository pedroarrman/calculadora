window.onload=function(){
document.getElementById("calcular").addEventListener("click",generar);
}

function generar(){
let entrada = document.getElementById("horas").value;

let operador = 3600;

let resultado = entrada*operador;

console.log(resultado);

let salida = document.createElement("input");
salida.setAttribute("type","text");
salida.setAttribute("value", resultado);

document.getElementById("contenedor").appendChild(salida);

document.getElementById("calcular").setAttribute("disabled", "true");
}