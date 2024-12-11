<template>
  <v-app-bar class="custom-app-bar">
    <!-- Interactieve logo-container -->
    <v-toolbar-title
      @click="onLogoClick"
      tabindex="0"
      role="link"
      aria-label="Go to main page"
      class="logo-container"
    >
      <img src="/logo4.png" alt="Logo" class="logo mr-2" />
    </v-toolbar-title>

    <!-- Spacer om items naar rechts te duwen -->
    <v-spacer></v-spacer>

    <!-- Instellingen-icon -->
    <v-btn icon @click="onSettingsClick" aria-label="Open settings">
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <!-- Gebruikersavatar -->
    <v-btn icon v-if="isAuthenticated" @click="onProfileClick">
      <v-avatar>
        <img
          :src="user.picture"
          :alt="user.name || 'User avatar'"
        />
      </v-avatar>
    </v-btn>

    <!-- Login-knop -->
    <v-btn
      v-else
      class="custom-login-btn"
      @click="onLoginClick"
      aria-label="Log in"
    >
      Login
    </v-btn>
  </v-app-bar>
</template>


<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user, isAuthenticated } = useAuth0();
    const router = useRouter();

    // Centrale navigatiefunctie
    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    return {
      user,
      isAuthenticated,
      onLogoClick: () => navigateTo("MainMenu"),
      onSettingsClick: () => navigateTo("SettingsPage"),
      onProfileClick: () => navigateTo("Profile"),
      onLoginClick: () => navigateTo("Login"),
    };
  },
};
</script>


<style scoped>
/* Logo styling */
.logo {
  max-height: 55px;
  max-width: 100px;
  object-fit: contain;
  margin: auto;
  cursor: pointer; 
}

/* Application Bar styling */
.custom-app-bar.v-toolbar {
  background-color: rgba(0, 170, 162, 1) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #333333;
}

/* Avatar styling */
.v-avatar img {
  max-height: 40px;
  max-width: 40px;
  border-radius: 50%;
  object-fit: cover;
}

/* Login-knop styling */
.custom-login-btn {
  background: linear-gradient(to right, rgba(71, 94, 108, 1), rgba(20, 27, 31, 1));
  color: #ffffff;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border: none;
}

.custom-login-btn:hover {
  background: linear-gradient(to right, rgba(71, 94, 108, 0.8), rgba(20, 27, 31, 0.8));
}

.custom-login-btn:focus {
  outline: 2px solid #82caff;
  box-shadow: 0 0 5px #82caff;
}
</style>

