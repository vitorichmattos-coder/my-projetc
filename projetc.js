
 const itens =document.querySelectorAll(".item");
const hh=document.getElementById("h1");
const inputBloco =document.getElementById("campoAnotacao");
const btnBloco =document.getElementById("salvar");
const maintBloco =document.getElementById("anotcao");
let contador =0;


function addConta(){
  let valorInput=inputBloco.value;
if((valorInput !=="")&&(valorInput !==null)&&(valorInput !==undefined))
{ 
  ++contador
let novoItem = `<div id="${contador}" class="b">



                    <div onclick="marcarTarefa(${contador})" class="icone">   <i id="icone_${contador}" class="mdi mdi-circle-outline"></i></div>



                    <div onclick="marcarTarefa(${contador})"  id="valor" class="valor">${valorInput}</div>

                    
                    <div  class="check">
                        <button onclick="deletar(${contador})" style="background-color: red;height: 20px;width: 100%; border: none;" class="btnd"><i
                                class="mdi mdi-delete"></i>deletar
                        </button>
                    </div>`

//adicionar novo item no main
maintBloco.innerHTML+=novoItem; 

inputBloco.value="";
inputBloco.focus();
}
};

function deletar(id){
var tarefa =document.getElementById(id);
tarefa.remove();
}


function marcarTarefa(id){
var a=document.getElementById(id);
var classe= a.getAttribute('class');
console.log(classe)
if(classe =="b"){
    a.classList.add("clicado")
    var icone= document.getElementById('icone_'+id);
icone.classList.remove('mdi-circle-outline');
icone.classList.add('mdi-check-circle');
a.parentNode.appendChild(a);
} else  {
    a.classList.remove('clicado');
    var icone= document.getElementById('icone_'+id);
icone.classList.remove('mdi-check-circle');
icone.classList.add('mdi-circle-outline');
}
}

inputBloco.addEventListener("keydown", function(event){
  if(event.keyCode===13){
    addConta();
  }
})











let horas = new Date().getHours();

if(horas <12){

hh.innerHTML="Bom Dia"
}else if (horas <18){
hh.innerHTML="Boa Tarde"
}else{
  hh.innerHTML="Boa Noite"
}




 let index = 0
 const total = itens.length
 let timer;



 function trocar(){
  itens[index].classList.remove("active")
 index++;
 if (index >= total) {
     index = 0;
   }

 itens[index].classList.add("active");


 }
 setInterval(trocar,3000)





 //funcção converter real pra dolar 
 
function realDolar(valor){
const cotacaoDolar = 5.28; // exemplo
    return valor * cotacaoDolar;
 }
 //funcção converter real pra euro 
function realEuro(valor) {
    const cotacaoEuro = 6.16; // exemplo
    return valor * cotacaoEuro;
}
 function converter(){

 const valor=parseFloat(document.getElementById("campoConversao").value);
 const moedaSelecionada= document.getElementById("op").value;
 const resultado =document.getElementById("resp");
 const cp =document.getElementById("cp");
 let valorConvertido;
 if (isNaN(valor) && valor <= 0) {
        resultado.innerText = "Digite um valor válido!";
       
        return;
    }

if (moedaSelecionada==="dolar"){
  valorConvertido=realDolar(valor);
  resultado.innerHTML="Valor em Dolar: $"+valorConvertido;
cp.style.backgroundColor="rgb(82, 163, 115)"
}

else if (moedaSelecionada==="euro"){
  valorConvertido=realEuro(valor);
  resultado.innerHTML="Valor em euro: €"+valorConvertido;
cp.style.backgroundColor="rgb(99, 14, 14)"
}

}

function mudarCorFundo() {
    // 1. Captura o elemento select pelo ID
    const select = document.getElementById("sele");
    
    // 2. Obtém o valor selecionado
    const corSelecionada = select.value;
    
    // 3. Usa switch case para definir a cor
    switch (corSelecionada) {
        case "red":
            document.body.style.background = "rgb(119, 6, 6)";
            break;
        case "blue":
            document.body.style.background = "rgb(25, 10, 99)";
            break;
        case "green":
            document.body.style.background = "rgb(9, 91, 35)";
            break;
        case "yellow":
            document.body.style.background = "rgb(153, 151, 23)";
            break;
        default:
            document.body.style.background = "linear-gradient(90deg,rgba(1, 1, 5, 1) 0%, rgba(9, 9, 121, 1) 100%, rgb(29, 28, 28) 100%)"
    }
}


function inserValues(num){
  const valorDisplay =document.getElementById("inputDisplay").value;
  document.getElementById("inputDisplay").value=valorDisplay+num
  
}

function ac()  {
  const valorDisplay =document.getElementById("inputDisplay").value;
  document.getElementById("inputDisplay").value=""
}

function apagarUm() {
   const valorDisplay =document.getElementById("inputDisplay").value;
  document.getElementById("inputDisplay").value=valorDisplay.slice(0,-1) 
  document.getElementById("inputDisplay").style.backgroundColor="gray"
}

function calculate() {
   const valorDisplay =document.getElementById("inputDisplay").value;
  document.getElementById("inputDisplay").value=eval(valorDisplay)
document.getElementById("inputDisplay").style.backgroundColor="black"

}

function invertValue(){
  calculate()
const valorDisplay =document.getElementById("inputDisplay").value;
  document.getElementById("inputDisplay").value=valorDisplay*-1
}
function percentage(){
let valorDisplay =document.getElementById("inputDisplay");

let valor =valorDisplay.value;
let separa= valor.split("*")

let num1 = separa[0];
let num2 = separa[1];

let total =num1*(num2/100)

valorDisplay.value= total
}
const valorDisplay =document.getElementById("inputDisplay");

valorDisplay.addEventListener("keydown", function(event){
  if(event.keyCode==187){
    calculate();
  }
})






 


