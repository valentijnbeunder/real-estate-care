// Import Vue and the main App component
import { createApp } from 'vue';
import App from './App.vue';

// Import plugins and libraries
import { createAuth0 } from "@auth0/auth0-vue";
import { createVuetify } from 'vuetify';
import router from './router';
import store from './stores';

// Import Vuetify components, directives, styles, and icons
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles'; // Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Configure Vuetify
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          background: '#FFFFFF',
          surface: '#FFFFFF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#BB86FC',
          secondary: '#03DAC6',
          background: '#121212',
          surface: '#121212',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});

// Configure Auth0
const auth0Config = {
  domain: "dev-ug2h8yvri8g5fw1i.us.auth0.com",
  clientId: "ywzqWpfl98V8qKpCBp9twEGRapse1fKQ",
  authorizationParams: {
    redirect_uri: window.location.origin + "/callback", // Dynamic redirect URI
  },
};
console.log("Auth0 Config Debug:", auth0Config); // Debugging information
console.log("Auth0 redirect URI:", window.location.origin + "/callback"); // Added log for redirect URI

// Create and mount the Vue app
const app = createApp(App);

app.use(createAuth0(auth0Config));
app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');
