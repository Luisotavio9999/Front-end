

var barraProgresso = document.querySelector(".progress");
barraProgresso.computedStyleMap.display = "none";

function Enviar() {
    var nomeCompleto = document.getElementById('nomeCompleto').value
    var idade = parseInt(document.getElementById('idade').value)
    var cidade = document.getElementById('cidade').value

    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            //limpar valor variavel 
            clearInterval(intervalo);
            barraProgresso.style.display = "none";

            if (idade == "" || nomeCompleto == "" || cidade == "") {
                document.querySelector("#mostrar").innerHTML =
                    `<div class="alert alert-danger fade show" role="alert">
            <span> preencha os campos obrigatorios  </span> 
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
            </div>`
            }
            else if (idade > 120 || idade < 10) {
                document.querySelector("#mostrar").innerHTML =
                    `<div class="alert alert-danger fade show" role="alert">
            <span> idade invalida </span> 
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
            </div>`
            }
            else {
                document.querySelector("#mostrar").innerHTML =
                    `<div class="alert alert-success fade show" role="alert">
            <span> você conseguiu se logar ${nomeCompleto} de idade ${idade} que mora em ${cidade} </span> 
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
            </div>`
            }
        }
        else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++;
            barra.style.width = progresso + "%";
        }


    }, 50);
}