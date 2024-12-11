<template>
  <v-app>
    <ApplicationBar /> <!-- ApplicationBar is placed globally -->
    <v-main>
      <router-view /> <!-- Routed components are displayed here -->
    </v-main>
    <NavigationBar /> <!-- NavigationBar is placed globally -->
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
