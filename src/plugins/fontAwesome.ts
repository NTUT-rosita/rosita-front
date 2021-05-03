import { library } from '@fortawesome/fontawesome-svg-core'
import FontAwesomeIcon from '@/components/app/FontAwesomeIcon.vue'
import { faSmile } from '@fortawesome/free-solid-svg-icons/'
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faSmile, faGithub, faInstagram, faFacebook)

export default FontAwesomeIcon
