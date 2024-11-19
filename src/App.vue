<template>
  <v-app>
    <ApplicationBar /> <!-- Application Bar Component -->

    <v-main>
      <MainContent /> <!-- Main Content Component -->
      <NavigationBar /> <!-- Navigation Bar Component -->
    </v-main>
  </v-app>
</template>

<script>
import ApplicationBar from './components/ApplicationBar.vue';
import NavigationBar from './components/NavigationBar.vue';
import MainContent from './components/MainContent.vue';

export default {
  components: {
    ApplicationBar,
    NavigationBar,
    MainContent,
  },
};
</script>
