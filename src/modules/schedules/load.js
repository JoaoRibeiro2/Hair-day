import {schedulesFetchByDay} from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
const selectedDate = document.getElementById("date")
export async function schedulesDay(){
  // Obtém a data do input
  const date = selectedDate.value
  // Busca na API os agendamentos para carregar ao lado direito da tela

  const dailySchedules = await schedulesFetchByDay({ date })
  console.log(dailySchedules)

    hoursLoad({date})
  // Os horários disponíveis do lado esquerdo
}