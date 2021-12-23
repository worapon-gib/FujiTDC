

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0B3751',
        secondary: '#22BFF0',
        third: '#B1FFDA',
        accent: '#F8DF00',
        neutral: '#EEEEEE',
        background: '#ffffff'
      },
    }
  }
})