<template>
  <v-bottom-navigation
    v-model="active"
    :absolute="true"
    :app="true"
    style="background-color: rgba(0, 170, 162, 1);"
  >
    <!-- Redirect to AssignedReports -->
    <v-btn
      :active="active === 0"
      @click="navigateToAssignedReports"
      icon
      aria-label="View assigned reports"
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

    <!-- Navigate to ExecutedReports -->
    <v-btn
      :active="active === 1"
      @click="navigateToExecutedReports"
      icon
      aria-label="View executed reports"
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

    <!-- Navigate to KnowledgeBase -->
    <v-btn
      :active="active === 2"
      @click="navigateToKnowledgeBase"
      icon
      aria-label="Open knowledge base"
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

    <!-- Navigate to SettingsPage -->
    <v-btn
      :active="active === 3"
      @click="navigateToSettingsPage"
      icon
      aria-label="Open settings"
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const navigateToAssignedReports = () => {
      console.log("Navigating to AssignedReports");
      router.push({ name: "AssignedReports" }).catch((err) => console.error(err));
    };

    const navigateToExecutedReports = () => {
      console.log("Navigating to ExecutedReports");
      router.push({ name: "ExecutedReports" }).catch((err) => console.error(err));
    };

    const navigateToKnowledgeBase = () => {
      console.log("Navigating to KnowledgeBase");
      router.push({ name: "KnowledgeBase" }).catch((err) => console.error(err));
    };

    const navigateToSettingsPage = () => {
      console.log("Navigating to SettingsPage");
      router.push({ name: "SettingsPage" }).catch((err) => console.error(err));
    };

    return {
      navigateToAssignedReports,
      navigateToExecutedReports,
      navigateToKnowledgeBase,
      navigateToSettingsPage,
    };
  },
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
