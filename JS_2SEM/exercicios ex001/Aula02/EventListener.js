
const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//funçao que sera chamada quando o botao for clicado 
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador
}

//adicionando ouvinte do evento para clique do botao 

aumentar.addEventListener("click", aumentarContador); 
function diminuirContador()
{
    if(contador == 0){
        exit
    }
    else {
        contador--;
    contadorElemento.textContent = contador;
    } 
}

diminuir.addEventListener("click", diminuirContador); 

function zerarContador()
{
    contador = 0;
    contadorElemento.textContent = contador
}

zerar.addEventListener("click", zerarContador); 