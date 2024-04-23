import { reactive } from 'vue';
import data from './db.json'


export const menù = reactive({
    menùHeader: data.menùHeader,
})

export const services = reactive({
    services: data.services

})
