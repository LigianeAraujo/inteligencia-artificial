const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-Alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultados");


const perguntas =[
    {
        enunciado: "Pergunta 1",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 2",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 4",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },

    {
        enunciado: "Pergunta 5",
        alternativas:[
            {
                texto: "Alternativa A",
                afirmacao: "afirmacao da alternativa A."
            },
            {
                 texto: "Alternativa B",
                afirmacao: "afirmacao da alternativa B."
            }
        ]
    },
];

 let atual = 0;
 let perguntaAtual;
 let historiaFinal = "";

 function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraReseltado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
 }