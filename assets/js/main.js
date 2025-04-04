//minha chave da api
const key= "e0283766cee7e7e70be7e75409ae8042"
//funcao para pegar o valo do input cidade


function coletarValor() {
    //buscando o valor  do put no html e atribuindo a variavel cidade 
    let cidade = document.querySelector(".input-cidade").value
    //imprimindo variavel cidade
console.log(cidade)
dadosapi(cidade)
}
//funcao para pegar dados api
async function dadosapi(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response=> response.json())
    console.log (dados)
    dadostela(dados)
}
function dadostela(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".previsao-do-tempo").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = + dados.main.humidity + "%"
    
}