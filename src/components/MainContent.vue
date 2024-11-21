<template>
  <v-main
    class="d-flex align-center justify-center"
    style="min-height: 300px"
  >
    <div>
      <h2>Inspection List</h2>
      <InspectionList />
    </div>
  </v-main>
</template>

<script>
import InspectionList from "./InspectionList.vue";

export default {
  name: "MainContent",
  components: {
    InspectionList,
  },
};
</script>

<style scoped>
/* Voeg hier specifieke stijlen toe als nodig */
</style>
