// importando os modulos do modal e do alerta de erro
import { modal } from "./modal.js"
import {alertError} from "./alert-error.js"
import { calcIMC, notNumber } from "./utils.js"

// variaveis para selecionar elementos html
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// funçao para exibir a mensagem do resultado do imc e validar os dados inseridos
form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value
  const result = calcIMC(weight, height)
  const message = `Seu IMC é de ${result}`
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  
  if(weightOrHeightIsNotANumber) {
    alertError.open()
    return;
  }

  alertError.close()

  modal.message.innerText = message
  modal.open()

  // apos a abertura do modal os valores serao resetados
  inputHeight.value = ""
  inputWeight.value = ""
}

// arrow function para remover o alerta de erro quando o usuario digitar novamente
inputWeight.oninput = () => {
  alertError.close()
}

inputHeight.oninput = () => {
  alertError.close()
}



