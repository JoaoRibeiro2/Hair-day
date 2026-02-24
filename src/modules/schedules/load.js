import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export function schedulesDay(){
  // Obtém a data do input
  const date = selectedDate.value
  // Busca na API os agendamentos para carregar ao lado direito da tela
    hoursLoad({date})
  // Os horários disponíveis do lado esquerdo
}