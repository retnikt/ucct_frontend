import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.deepOrange.base,
        secondary: colors.cyan.base,
        accent: colors.lime.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.blue.base,
        success: colors.green.base
      }
    }
  }
})
