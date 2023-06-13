/*Selecionar input com o numero digitado */
let valorDigitado = document.querySelector('#valorReal')

// Selecionar os elementos radios do html (criar um array deles)
let moedasSelecionadas = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// Selecionar os botões
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

//Cotações do dia 12/06/2023
let valorDolar = 4.87
let valorEuro = 5.23
let valorLibra = 6.09
let valorBitcoin = 19.400437
let valorEmReal = 0

let moedaEstrangeira = ''
let moedaConvertida = ''

// Mensagem formatada para exibir valores monetários
function MensagemFormatada(moedaConvertida){
   isNaN(valorEmReal) ? valorEmReal = 0 : ''
   console.log('Moeda Convertida ' + moedaConvertida);
   aviso.textContent = 'O valor ' + (valorEmReal).toLocaleString('pt-br', {
      style: 'currency', currency: 'BRL'
   }) + ' convertido em ' + moedaEstrangeira + ' é ' + moedaConvertida
}

// Verificar se foi digirado algum valor para pode converter
function bloquearBotao(){
   if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null){
      btnConverter.setAttribute('disabled', 'disabled')
      btnConverter.style.background = '#ccc'
      btnConverter.style.cursor = 'not-allowed'
   }
}

//Reativar botão
function ativarBotao(){
   if(valorDigitado.value > 0){
      btnConverter.removeAttribute('disabled')
      btnConverter.style.background = '#ffc107'
      btnConverter.style.cursor = 'pointer'
   }else{
      console.log('Não foi possível ativar')
   }
   
}

// Verificar qual botão RADIO está MARCADO checked ou checked == true
// Vincular a verificação a um evento, click no botão CONVERTER
btnConverter.addEventListener('click', function(){
   //Converter os valores monetários(string >> float)
   valorEmReal = parseFloat(valorDigitado.value)

   console.log('Escolha a moeda estrangeira')
   for(let i = 0; i < moedasSelecionadas.length; i++){
      if(moedasSelecionadas[i].checked){
         moedaEstrangeira = moedasSelecionadas[i].value
         console.log(moedaEstrangeira)
   }

}

switch(moedaEstrangeira){
   case 'Dólar':
      moedaConvertida = valorEmReal / valorDolar
      MensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
      break;

      case 'euro':
         moedaConvertida = valorEmReal / valorEuro
         MensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
         break;

         case 'Libra':
            moedaConvertida = valorEmReal / valorLibra
            MensagemFormatada(moedaConvertida.toLocaleString('eng-GB', {style: 'currency', currency: 'GBP'}))
            break;

            case 'Bitcoin':
            moedaConvertida = valorEmReal / valorBitcoin
            MensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
            break;

            default:
               aviso.textContent = 'Escolha uma moeda estrangeira'}
            
               isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
            })

btnLimpar.addEventListener('click', function(){
   valorDigitado.focus()
   valorDigitado.value = ''
   aviso.textContent = 'Digite o valor, escolha a moeda e converta'
   moedasSelecionadas[0].checked = false
   moedasSelecionadas[1].checked = false
   moedasSelecionadas[2].checked = false
   moedasSelecionadas[3].checked = false  
})
