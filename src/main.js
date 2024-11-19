import { createApp } from 'vue';
import App from './App.vue';

// Import Vuetify and all components/directives
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Include all Vuetify components
import * as directives from 'vuetify/directives'; // Include all Vuetify directives
import 'vuetify/styles'; // Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

// Import icon aliases
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App)
  .use(vuetify)
  .mount('#app');