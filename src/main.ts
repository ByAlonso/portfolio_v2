import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons
import {
  faCode,
  faDatabase,
  faLeaf,
  faStream,
  faUserCog,
  faCloud,
  faPaperPlane,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faJs,
  faJava,
  faPython,
  faSass,
  faReact,
  faAngular,
  faNodeJs,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'

// Add them to the library
library.add(
  faCode,
  faDatabase,
  faLeaf,
  faStream,
  faUserCog,
  faCloud,
  faPaperPlane,
  faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faReact,
  faAngular,
  faNodeJs,
  faDocker,
  faGithub,
)

import i18n from '@/i18n'

// Add them to the library
library.add(faGithub, faLinkedin, faEnvelope, faHtml5, faCss3Alt, faJs)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.mount('#app')
