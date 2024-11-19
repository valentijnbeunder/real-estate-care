<template>
    <v-app-bar class="custom-app-bar">
      <!-- Content boven de achtergrond -->
      <v-toolbar-title>
        <img src="/logo4.png" alt="Logo" class="logo mr-2" />
      </v-toolbar-title>
  
      <!-- Spacer to push items naar rechts -->
      <v-spacer></v-spacer>
  
      <!-- Search Icon -->
      <v-btn icon @click="onSearchClick">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
  
      <!-- App Bar Navigation Icon -->
      <v-app-bar-nav-icon @click="onMenuClick" />
  
      <!-- Settings Icon -->
      <v-btn icon @click="onSettingsClick">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      onMenuClick() {
        console.log("Navigation icon clicked!");
      },
      onSearchClick() {
        console.log("Search icon clicked!");
      },
      onSettingsClick() {
        console.log("Settings icon clicked!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Logo styling */
  .logo {
    max-height: 50px;
    max-width: 50px;
    object-fit: contain;
  }
  
  /* Application Bar styling */
  .custom-app-bar.v-toolbar {
  background-color: rgba(0, 170, 162, 1) !important; /* Ensure the color is visible */
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
  </style>
  