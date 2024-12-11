<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Title -->
        <h1 class="text-center profile-title">Profile</h1>
        <v-divider class="mb-4"></v-divider>

        <!-- User Details -->
        <v-card class="mb-3">
          <v-card-title class="font-weight-bold">User Information</v-card-title>
          <v-card-text v-if="user">
            <p><strong>Name/Email:</strong> {{ user.name || user.email || "N/A" }}</p>
          </v-card-text>
          <v-card-text v-else>
            <p>No user information available.</p>
          </v-card-text>
        </v-card>

        <!-- Account Actions -->
        <v-card class="mb-3">
          <v-card-title class="font-weight-bold">Account</v-card-title>
          <v-card-text>
            <v-btn
              color="red"
              outlined
              block
              @click="handleLogout"
              aria-label="Logout from your account"
            >
              Logout
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "ProfilePage",
  setup() {
    const { user, logout } = useAuth0();

    // Handles logout and redirection
    const handleLogout = () => {
      try {
        logout({
          returnTo: window.location.origin, // Redirects after logout
        });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    return {
      user,
      handleLogout,
    };
  },
};
</script>

  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  