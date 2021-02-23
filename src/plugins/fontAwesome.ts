// import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@/components/app/FontAwesomeIcon.vue";
// import iconConfigs from '@/assets/json/icons.json'
import { faSmile } from '@fortawesome/free-solid-svg-icons/'
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

// fas[icon.prefix + icon.name[0].toUpperCase() + icon.name.slice(1)]

// const solidFontAwesomeIconPackPath = '@fortawesome/free-solid-svg-icons/'
//
// const requiredIconLibrary = [] as Array<IconDefinition>
//
// const parseIconJsonFileToIconList = async () => {
//   const icons = iconConfigs.icons
//   for (const icon of icons) {
//     requiredIconLibrary.push(
//
//     )
//   }
// }
//
// parseIconJsonFileToIconList().then(
//   () => library.add(...requiredIconLibrary)
// )

library.add(faSmile, faGithub, faInstagram, faFacebook)

export default FontAwesomeIcon;

// await (async () => await
//     (await import(
//     solidFontAwesomeIconPackPath
//     + icon.prefix
//     + icon.name[0].toUpperCase()
//     + icon.name.slice(1)
//     + '.js')).definition
// )()
