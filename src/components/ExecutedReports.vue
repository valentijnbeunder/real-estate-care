<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row>
          <v-col>
            <h1 class="text-center">Executed Reports</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <InspectionList />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InspectionList from './InspectionList.vue';

export default {
  components: {
    InspectionList,
  },
};
</script>
