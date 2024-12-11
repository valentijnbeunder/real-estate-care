<template>
  <v-main
    class="d-flex flex-column align-center justify-center"
    style="min-height: 300px;"
  >
    <v-container class="text-center">
      <v-card elevation="10" class="pa-6 welcome-card">
        <v-card-title class="text-h4 font-weight-bold text-primary">
          Real Estate Care
        </v-card-title>
        <v-divider class="my-4"></v-divider>
        <v-card-text>
          <p class="welcome-text">
            Bij Real Estate Care streven we ernaar om de beste ervaring te bieden in het beheren
            en ontwikkelen van uw eigendommen. Of u nu een koper, verkoper of huurder bent, wij zijn hier
            om u te helpen.
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>


<script>
export default {
  name: "WelcomePage", // Geef de component een duidelijke naam
};
</script>

<style scoped>
/* Stijlen voor de welkomstpagina */
.welcome-card {
  max-width: 600px;
  margin: auto;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #007bff; /* Gebruik een opvallende kleur voor de titel */
}

.welcome-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 0;
}

.v-divider {
  background-color: #007bff; /* Geef de divider een kleur die past bij de stijl */
}
</style>

