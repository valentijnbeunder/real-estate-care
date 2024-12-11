<template>
  <v-container class="fill-height d-flex align-center justify-center" fluid>
    <v-card class="login-card" elevation="4">
      <v-card-title class="text-center">
        <v-row justify="center">
          <v-col cols="12">
            <h2 v-if="!isAuthenticated">Login/Register</h2>
            <h2 v-else>Welcome, {{ user?.name || "User" }}</h2>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-actions class="d-flex flex-column">
        <template v-if="!isAuthenticated">
          <v-btn
            class="custom-btn mb-4"
            block
            @click="loginWithRedirect"
            aria-label="Login to your account"
          >
            Login
          </v-btn>
          <v-btn
            class="custom-btn"
            block
            @click="registerWithAuth0"
            aria-label="Register a new account"
          >
            Register
          </v-btn>
        </template>
        <template v-else>
          <v-btn
            class="custom-btn mb-4"
            block
            @click="logout"
            aria-label="Logout from your account"
          >
            Logout
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    // Function to redirect to Auth0 signup
    const registerWithAuth0 = () => {
      loginWithRedirect({
        screen_hint: "signup",
        authorizationParams: {
          redirect_uri: window.location.origin, // Redirect back to the current page
        },
      }).catch((error) => {
        console.error("Error during registration redirect:", error);
      });
    };

    // Logout function with optional parameters
    const handleLogout = () => {
      logout({
        logoutParams: {
          returnTo: window.location.origin, // Redirect to the current origin after logout
        },
      }).catch((error) => {
        console.error("Error during logout:", error);
      });
    };

    return {
      loginWithRedirect,
      registerWithAuth0,
      logout: handleLogout,
      isAuthenticated,
      user,
    };
  },
};
</script>


<style scoped>
.login-card {
  max-width: 400px;
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Styling for the custom buttons */
.custom-btn {
  background: linear-gradient(to right, rgba(71, 94, 108, 1), rgba(20, 27, 31, 1));
  color: #ffffff; /* White text for good contrast */
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.custom-btn:hover {
  background: linear-gradient(to right, rgba(71, 94, 108, 0.8), rgba(20, 27, 31, 0.8));
  transform: scale(1.02);
}

.custom-btn:focus {
  outline: 2px solid #82caff; /* Focus ring for accessibility */
  box-shadow: 0 0 8px rgba(130, 202, 255, 0.8);
}

.custom-btn:active {
  transform: scale(0.98);
}
</style>

