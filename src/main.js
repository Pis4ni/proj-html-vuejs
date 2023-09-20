const app = createApp(App)
import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
// * ========================= FontAwesome =============================
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faTwitter,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faClock, faChevronDown, faTwitter,faFacebook,faInstagram,faLinkedin)

app.component('font-awesome-icon', FontAwesomeIcon)
// * ====================================================================

app.mount('#app')
