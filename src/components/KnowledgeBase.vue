<template>
  <v-app>
    <v-main>
      <v-container fluid class="py-5">
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-center title">Knowledge Base</h1>
            <p class="text-center subtitle">
              Explore detailed insights and visualizations about our work.
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-5">
          <!-- Solar Panels Section -->
          <v-col cols="12" sm="6" class="text-center">
            <v-card class="mx-auto v-card-hover" elevation="2">
              <v-img
                src="/solarpannels.png"
                alt="Solar Panels"
                max-height="200"
                max-width="300"
                class="cursor-pointer"
                @click="showImage('/solarpannels.png')"
              ></v-img>
              <v-card-subtitle>Solar Panels Installation</v-card-subtitle>
              <v-card-text>
                A split-view of the rooftop before and after the solar panels installation.
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Output Image Section -->
          <v-col cols="12" sm="6" class="text-center">
            <v-card class="mx-auto v-card-hover" elevation="2">
              <v-img
                src="/output.png"
                alt="Output Graph"
                max-height="200"
                max-width="300"
                class="cursor-pointer"
                @click="showImage('/output.png')"
              ></v-img>
              <v-card-subtitle>Cooling System Performance</v-card-subtitle>
              <v-card-text>
                Graph showing temperature trends and cooling system efficiency under heavy load.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Image Modal -->
        <v-dialog v-model="imageDialog" max-width="90%">
          <v-card>
            <v-img :src="currentImage" :alt="currentImage" aspect-ratio="16/9"></v-img>
            <v-card-actions>
              <v-btn text @click="imageDialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      imageDialog: false, // Controls the dialog visibility
      currentImage: '', // Stores the path of the currently clicked image
    };
  },
  methods: {
    showImage(imagePath) {
      if (imagePath) {
        this.currentImage = imagePath;
        this.imageDialog = true; // Open the dialog
      } else {
        console.error("Invalid image path provided");
      }
    },
    checkQuery() {
      const queryImage = this.$route.query.image;
      if (queryImage) {
        this.showImage(`/${queryImage}`); // Open the image specified in the query parameter
      }
    },
  },
  mounted() {
    try {
      this.checkQuery(); // Check for query parameters on page load
    } catch (error) {
      console.error("Failed to process query parameters:", error);
    }
  },
};
</script>


<style scoped>
/* Overall page styling */
.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.cursor-pointer {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cursor-pointer:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.mt-5 {
  margin-top: 40px;
}

.v-card {
  max-width: 350px;
}

.v-card-hover:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.v-card-subtitle {
  font-weight: bold;
  font-size: 16px;
}

.v-card-text {
  font-size: 14px;
  color: #555;
}

.v-btn {
  color: #007bff;
}

.v-btn:hover {
  text-decoration: underline;
}
</style>

