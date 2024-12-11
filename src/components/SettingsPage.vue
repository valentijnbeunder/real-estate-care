<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1 class="text-center">Settings
        </h1>
        <v-divider class="mb-4"></v-divider>

        <!-- Theme Toggle -->
        <v-card class="mb-3">
          <v-card-title>
            <v-switch
              v-model="isDarkTheme"
              label="Dark Theme"
              aria-label="Toggle dark mode"
            ></v-switch>
          </v-card-title>
        </v-card>

        <!-- Account Settings -->
        <v-card class="mb-3">
          <v-card-title>Account</v-card-title>
          <v-card-text>
            <v-btn
              color="red"
              outlined
              block
              @click="logout"
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
import { mapGetters, mapActions } from "vuex";
import { useTheme } from "vuetify";
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const theme = useTheme();
    const { logout, isAuthenticated } = useAuth0();
    const router = useRouter();

    // Logout function
    const handleLogout = async () => {
      try {
        await logout({ returnTo: window.location.origin });
        if (!isAuthenticated) {
          setTimeout(() => {
            router.push("/login");
          }, 500); // Slight delay to ensure logout completes
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    return {
      theme,
      handleLogout,
    };
  },

  computed: {
    ...mapGetters("darkmode", ["currentTheme"]),
    isDarkTheme: {
      get() {
        return this.currentTheme === "dark";
      },
      set(value) {
        this.toggleTheme();
      },
    },
  },

  watch: {
    currentTheme(newTheme) {
      this.theme.global.name.value = newTheme;
    },
  },

  methods: {
    ...mapActions("darkmode", ["toggleTheme"]),
    logout() {
      this.handleLogout();
    },
  },
};
</script>


<style scoped>
.text-center {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.v-card {
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.v-btn:hover {
  background-color: rgba(255, 0, 0, 0.1);
  transform: scale(1.02);
}
</style>
