import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tools: null,
    categories: {},
    backendURL: 'http://localhost:8000/',
    categoryIcons: {
      Strings: 'mdi-text_format',
      Maths: 'mdi-add_circle',
      Units: 'mdi-square_foot',
      'Text Encoding': 'mdi-translate',
      'Data Encoding': 'mdi-looks_2',
      Encryption: 'mdi-lock',
      Escapes: 'mdi-help',
      Hashes: 'mdi-fingerprint', // currently no hashtag icon, fingerprint is closest match i guess
      'Cyptography Misc.': 'mdi-enhanced_encryption',
      Image: 'mdi-image',
      Document: 'mdi-insert_drive_file',
      Video: 'mdi-videocam',
      Audio: 'mdi-audiotrack',
      Code: 'mdi-code',
      Other: 'mdi-dashboard'
    }
  },
  mutations: {
    tools (state, tools) {
      state.tools = tools
    },
    addToCategory (state, tool) {
      if (state.categories[tool.category] === undefined) {
        state.categories[tool.category] = []
      }
      state.categories[tool.category].push(tool)
    }
  },
  actions: {
    async updateTools () {
      this.commit('tools', await (await fetch(this.state.backendURL + ':tools')).json())
      for (const tool in this.state.tools) {
        this.commit('addToCategory', this.state.tools[tool])
      }
    }
  },
  modules: {}
})
