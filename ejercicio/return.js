let edad = prompt("Ingresa tu edad");

if (edad >=18) {
    alert("puedes usar calculadora");
}else {
     alert("no puedes hacer uso de calculadora");
}


function suma(){
  
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    return parseInt(num1) + parseInt(num2);
     } 


     //Hola profe, la intencion estaba en que la calculadora se presentara en el caso 
     //de ser mayor de edad. la cosa es que me perdi para que la funcion suma tuviera esa exclusividad. 