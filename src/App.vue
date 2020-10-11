<template>
  <v-app>
    <v-app-bar app color="green" dark> 
            <v-toolbar-title>Simple Blog App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>




export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
