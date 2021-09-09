//Carne - 400gr por pessoa  + de 6 horas - 650gr
//Ceveja - 1200ml por pessoa + de 6 horas - 2000ml
// Rifrigerante/agua - 1000ml por pessoa +6 horas 1500ml

//crianças valem por 0,5


let inputAdultos= document.getElementById('adultos')
let inputcrianca= document.getElementById('crianca')
let inputduracao= document.getElementById('duracao')
let resultado= document.getElementById('res')



function calcular(){
    let adultos= inputAdultos.value
    let crianca= inputcrianca.value
    let duracao= inputduracao.value
    let quantidadeCarne= adultos * carnePP(duracao) + (carnePP(duracao)/2 * crianca)
    let quantidadeCerveja= adultos * cervejaPP(duracao)
    let quantidadeBebidas = adultos * bebidasPP(duracao) + (bebidasPP(duracao)/2 * crianca)

    resultado.innerHTML=`<p>${quantidadeCarne} Kg de Carne</p>`
    resultado.innerHTML+=`<p>${Math.ceil(quantidadeCerveja/350)} latas de Cerveja</p>`
    resultado.innerHTML+=`<p>${Math.ceil(quantidadeBebidas/2000)} Pets de Bebidas</p>`
    
   
}

function carnePP(duracao){
    if (duracao >6) return 650;
    return 400;
   
}

function cervejaPP(duracao){
    if(duracao > 6) return 2000
    return 1200
}

function bebidasPP(duracao){
    if (duracao >6) return 1500;
    return 1000;
}
