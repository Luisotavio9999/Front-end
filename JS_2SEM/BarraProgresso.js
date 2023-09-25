
//dclaro uma variavel e atribua um valor a ela 
var barraProgresso = document.querySelector(".progress");
barraProgresso.computedStyleMap.display = "none";

function animarBarraProgresso() {
    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            //limpar valor variavel 
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML =
            `<div class="alert alert-success fade show" role="alert">
            <span> ola, bem vindo ao sesi </span> 
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button> 
            </div>`
        }
        else {
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
            progresso++; //enserramento da variavel progresso
            barra.style.width = progresso + "%";
        }
    }, 50); //percorre o tempo em milissegundos 
}