<template>
  <v-app>
    <ApplicationBar /> 
    <v-main>
      <router-view /> 
    </v-main>
    <NavigationBar /> 
  </v-app>
</template>

<script>
import ApplicationBar from './components/ApplicationBar.vue';
import NavigationBar from './components/NavigationBar.vue';

export default {
  components: {
    ApplicationBar,
    NavigationBar,
  },
};
</script>
