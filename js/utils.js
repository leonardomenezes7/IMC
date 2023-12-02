// função para calcular o imc
export function calcIMC (weight, height) {
  return(weight / ((height /100) ** 2)).toFixed(2)
}

// função para verificar se os valores inseridos não são um numero
export function notNumber (value) {
  return isNaN(value) || value == ""
}