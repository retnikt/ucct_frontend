<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
          alt="UCCT logo"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to UCCT
        </h1>
        <p class="subheading font-weight-regular">
          For help and engagement with other UCCT users
          <br>and developers, please join our
          <a :href="community" target="_blank">community</a>
        </p>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>
        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    community: '',
    importantLinks: [
      {
        text: 'GitHub',
        href: 'https://github.com/retnikt/ucct'
      },
      {
        text: 'Documentation',
        href: 'https://retnikt.github.io/ucct'
      }
    ]
  })
}
</script>
