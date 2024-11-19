<template>
  <v-bottom-navigation
    v-model="active"
    :absolute="true"
    :app="true"
    style="background-color: rgba(0, 170, 162, 1);"
  >
    <!-- Custom SVG Icons -->
    <v-btn
      :active="active === 0"
      @click="active = 0"
      icon
    >
      <v-icon>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="BadgeAccountPath" />
        </svg>
      </v-icon>
    </v-btn>

    <v-btn
      :active="active === 0"
      @click="active = 0"
      icon
    >
      <v-icon>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="BadgeAccountOutlinePath" />
        </svg>
      </v-icon>
    </v-btn>

    <v-btn
      :active="active === 0"
      @click="active = 0"
      icon
    >
      <v-icon>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="ArchivePath" />
        </svg>
      </v-icon>
    </v-btn>

    <v-btn
      :active="active === 0"
      @click="active = 0"
      icon
    >
      <v-icon>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="CogPath" />
        </svg>
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mdiBadgeAccountHorizontal } from "@mdi/js";
import { mdiBadgeAccountHorizontalOutline } from "@mdi/js";
import { mdiArchive } from "@mdi/js";
import { mdiCog } from "@mdi/js";

export default {
  data() {
    return {
      active: 0,
      BadgeAccountPath: mdiBadgeAccountHorizontal, 
      BadgeAccountOutlinePath: mdiBadgeAccountHorizontalOutline, 
      ArchivePath: mdiArchive,
      CogPath: mdiCog,
    };
  },
};
</script>
