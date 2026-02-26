"use strict"

// Configuração do dayjs

import "./libs/dayjs.js"
// CSS
import "./styles/global.css"
import "./styles/form.css"
import "./styles/schedule.css"

// JS

import dayjs from "dayjs"

import "./modules/form/submit.js"
import "./modules/form/date-change.js"

import "./modules/page-load.js"

console.log(dayjs().format("HH:mm"))