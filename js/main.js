// addEventListener espera 2 eventos:
// Espera um clique e Espera o que vai fazer

//const robotron = document.querySelector("#robotron")

// 3 maneiras de usar função
// ------- 1
//robotron.addEventListener("click", dizOi);
//function dizOi() {
//    console.log("Oi")
//}
// ------- 2
//robotron.addEventListener("click", function() {
//    console.log("Oi")
//});
// ------- 3
//robotron.addEventListener("click", () => {
//    console.log("Oi")
//});

//robotron.addEventListener("click", (evento) => {
//    console.log(evento)
//});
//
//
//function dizOi(nome) {
//    console.log("Oi " + nome)
//}

// -------------------------------------------------

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) // textContent pega o texto... textValue para input
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

// elemento.textContent = 768,630,289,597
// pecas['bracos'] = {forca: 29, poder: 35, energia: -21, velocidade: -5}


// --- PARA TRAZER O LOG DO CLICK
//controle.forEach( (elemento) => { 
//    elemento.addEventListener("click", (evento) => {
//        console.log(evento)
//    })
//})
// --------------------------------------


// --- FIXO SEM VARIAVEL
//somar.addEventListener("click", () => { 
//    manipulaDados("somar")
//})
//
//subtrair.addEventListener("click", () => {
//    manipulaDados("subtrair")
//})

