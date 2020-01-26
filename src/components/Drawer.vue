<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>

    <v-list-group v-for="(tools, category) in categories" :key="category" group :prepend-icon="icons[category]">

      <template v-slot:activator>
      <v-list-item-content class="v-list-group__activator">
        <v-list-item-title>
        {{ category }}
        </v-list-item-title>
      </v-list-item-content>
      </template>

      <v-list-item v-for="tool in tools" :key="tool.slug"
      link :to="{ name: 'tool', params: { slug: tool.slug } }">
      <v-list-item-title>{{tool.name}}</v-list-item-title>
      </v-list-item>

    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  computed: {
    categories () {
      return this.$store.state.categories
    },
    icons () {
      return this.$store.state.categoryIcons
    }
  }
}
</script>
