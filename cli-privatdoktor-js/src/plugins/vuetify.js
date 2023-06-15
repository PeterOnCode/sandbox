import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const theme = {
  themes : {
    light : {
      colors : {
        primary : '#1867C0',
        secondary : '#5CBBF6'
      }
    }
  }
}
export const vuetify = createVuetify( {
  components, directives, theme
} )
