import { reactive } from 'vue';
import data from './db.json'


export const header = reactive({
    menùHeader: data.menùHeader,
})

export const services = reactive({
    services: data.services
})

export const footer = reactive({
    menùFooter: data.menùFooter,
})
