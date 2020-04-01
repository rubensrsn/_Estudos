/*var batimentosPorMinuto = 75;
    idadeCarla = 45;
    idadeRubens = 37;
    diasDoAno = 365;
    horaEmMinutos = 60;
    horasDeUmDia = 24;
                      
alert ("O coração de Rubens bateu " + ((batimentosPorMinuto * horaEmMinutos) * horasDeUmDia) * (idadeRubens * diasDoAno) + " vezes em toda sua vida e o coração de Carla bateu " + ((batimentosPorMinuto * horaEmMinutos) * horasDeUmDia) * (idadeCarla * diasDoAno) + " vezes em toda sua vida.");*/


/*var batimentosPorMinuto = 75;
    diasDoAno = 365;
    horaEmMinutos = 60;
    horasDeUmDia = 24;
    button = document.querySelector("button");

button.onclick = function() {
    var idade = prompt("Qual sua idade?");
    alert ("O seu coração bateu em média " + ((batimentosPorMinuto * horaEmMinutos) * horasDeUmDia) * (idade * diasDoAno) + " vezes em toda sua vida.");
}*/

var batimentosPorMinuto = 75;
    diasDoAno = 365;
    horaEmMinutos = 60;
    horasDeUmDia = 24;
    button = document.querySelector("button");

button.onclick = function() {
    var idade = document.getElementById("idade").value;
        nome = document.getElementById("nome").value;
    alert ( nome + " o seu coração bateu em média " + ((batimentosPorMinuto * horaEmMinutos) * horasDeUmDia) * (idade * diasDoAno) + " vezes em toda sua vida." );
}