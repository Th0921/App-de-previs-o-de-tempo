

const key = "4f6fc2525ba367d3a95ede67979ccc18"


//Fução de colocar dados na Tela:

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

//Função que faz a busca lá no servidor:
async function bucaCidade(cidade) {

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
}


//função ao clicar no botão:
function cliqueNoBotao() {

    const cidade = document.querySelector(".input-cidade").value
        bucaCidade(cidade)
}