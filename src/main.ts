import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import i18n from '@/i18n'

// Add them to the library
library.add(faLinkedin, faEnvelope, faGithub)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.mount('#app')
