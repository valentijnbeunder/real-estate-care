<template>
  <div>
    <ul>
      <!-- Loop through all inspections -->
      <li
        v-for="(inspection, index) in inspections"
        :key="index"
        class="inspection-item"
      >
        <h3>{{ inspection.type }}</h3>
        <p><strong>Location:</strong> {{ inspection.details?.location || 'N/A' }}</p>

        <div v-if="inspection.details">
          <!-- Conditional rendering based on inspection type -->
          <template v-if="inspection.type === 'Damage recording'">
            <p><strong>New Damage:</strong> {{ inspection.details.newDamage ? "Yes" : "No" }}</p>
            <p><strong>Damage Type:</strong> {{ inspection.details.damageType || 'N/A' }}</p>
            <p><strong>Date:</strong> {{ inspection.details.date || 'N/A' }}</p>
            <p><strong>Description:</strong> {{ inspection.details.description || 'N/A' }}</p>
          </template>

          <template v-if="inspection.type === 'Record deferred maintenance'">
            <p><strong>Maintenance Type:</strong> {{ inspection.details.maintenanceType || 'N/A' }}</p>
            <p><strong>Cost Estimate:</strong> {{ inspection.details.costEstimate || 'N/A' }}</p>
            <p><strong>Description:</strong> {{ inspection.details.description || 'N/A' }}</p>
          </template>

          <template v-if="inspection.type === 'Inspect technical installations'">
            <p><strong>Reported Issues:</strong> {{ inspection.details.reportedIssues || 'N/A' }}</p>
            <p><strong>Installation Type:</strong> {{ inspection.details.installationType || 'N/A' }}</p>
            <p>
              <strong>Test Procedure:</strong>
              <router-link
                :to="{ name: 'KnowledgeBase', query: { image: 'output.png' } }"
                target="_blank"
                class="view-link"
              >
                View
              </router-link>
            </p>
            <p><strong>Approved:</strong> {{ inspection.details.approved ? "Yes" : "No" }}</p>
            <p><strong>Remarks:</strong> {{ inspection.details.remarks || 'N/A' }}</p>
          </template>

          <template v-if="inspection.type === 'Inventory modifications'">
            <p>
              <strong>Current Situation:</strong>
              <router-link
                :to="{ name: 'KnowledgeBase', query: { image: 'solarpannels.png' } }"
                target="_blank"
                class="view-link"
              >
                View
              </router-link>
            </p>
            <p><strong>Modification Location:</strong> {{ inspection.details.modificationLocation || 'N/A' }}</p>
            <p><strong>Performed By:</strong> {{ inspection.details.performedBy || 'N/A' }}</p>
            <p><strong>Modification Description:</strong> {{ inspection.details.modificationDescription || 'N/A' }}</p>
            <p><strong>Action to Take:</strong> {{ inspection.details.actionToTake || 'N/A' }}</p>
            <p><strong>Remarks:</strong> {{ inspection.details.remarks || 'N/A' }}</p>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import { fetchInspections } from "../services/inspectionService";

export default {
  data() {
    return {
      inspections: [],
    };
  },
  methods: {
    async loadInspections() {
      try {
        this.inspections = await fetchInspections();
        console.log("Inspections loaded successfully");
      } catch (error) {
        console.error("Failed to load inspections:", error);
      }
    },
  },
  created() {
    this.loadInspections();
  },
};
</script>


<style scoped>
.inspection-item {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #c7c7c7;
}
.inspection-item:hover {
  background-color: #d3d3d3;
}
</style>