// Plugins
// import { loadFonts } from './webfontloader'
import { vuetify } from './vuetify.js'
import store from '@/store/index.js'
import router from '@/router/index.js'
import { i18n } from './i18n.js'

export function registerPlugins ( app ) {
  // loadFonts()
  app
    .use( vuetify )
    .use( store )
    .use( router )
    .use( i18n )
}
