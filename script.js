const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O alongamento de unhas é uma tecnica estetica usada para aumentar o comporimento e melhorar a aparencia das unhas naturais.Pode ser feito com mateiais como gel, acrilico ou fibrta de vidro, garantindo resistencia e durabilidade",
        alternativas: [
            {
                texto: "Isso é incrivel!",
                afirmacao: "alongamento de unhas é feito para. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "o alongamento de unhas é feito para?",
        alternativas: [
            {
                texto: "apenas decorar as unhas.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "alongar e fortalecer as unhas",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: ". o alongamento em gel é conhecido como?",
        alternativas: [
            {
                texto: "um acabamento mais natural e flexivel.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "ser mais espesso e com aspecto artificial",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "o alongamento danifica as unhas naturais?",
        alternativas: [
            {
                texto: " sim, se nao for bem aplicado ou removido corretamente",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "nao, quando feito por proffisonal e com cuiddaos adequados.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " o alongamento em acrilico tem como caracteristicas? ",
        alternativas: [
            {
                texto: "ser mais regida e resistente",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "ser fragil e quabrar facilmente.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
