<template>
  <v-app>
    <Drawer v-if="loaded"></Drawer>
    <v-navigation-drawer v-else app></v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'

export default {
  name: 'App',
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
  beforeMount () {
    this.$store.dispatch('updateTools')
  },
  computed: {
    loaded () {
      return this.$store.state.tools !== null
    }
  }
}
</script>
