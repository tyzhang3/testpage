/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'md', // This is already the default value - only for display purposes
    aliases,
    sets: {
      md,
    },
  },
})
