import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import icons
import { faRotate, faHouse, faTruck, faUsers, faLightbulb, faSuitcase, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSun, faBuilding } from '@fortawesome/free-regular-svg-icons'

library.add(faBuilding, faRotate, faHouse, faTruck, faSun, faUsers, faLightbulb, faSuitcase, faGlobe)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
