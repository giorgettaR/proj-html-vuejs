import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import icons
import { faRotate, faHouse, faTruck, faUsers, faLightbulb, faSuitcase, faGlobe, faPhone, faLink} from '@fortawesome/free-solid-svg-icons'
import { faSun, faBuilding, faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faBuilding, faRotate, faHouse, faTruck, faSun, faUsers, faLightbulb, faSuitcase, faGlobe, faPhone, faEnvelope, faClock, faLink, faSearch)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
