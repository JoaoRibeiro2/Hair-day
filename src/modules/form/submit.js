import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday 
selectedDate.min = inputToday



form.onsubmit= async(event) =>{
    event.preventDefault()

    try{
        // Recuperando o nome do cliente

        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Selecione a hora")
        }
        // Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        const id = new Date().getTime()

        // Faz o agendamento

       await scheduleNew({
            id,
            name,
            when,
       })

    //  Recarregar o agendamento
    await schedulesDay()

    // Limpa o input do cliente

    clientName.value = ""
    }catch(error){
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}