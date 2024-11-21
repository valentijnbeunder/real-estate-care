<template>
    <div>
      <ul>
        <li
          v-for="inspection in sortedInspections"
          :key="inspection.details.date"
          @click="selectInspection(inspection)"
          class="inspection-item"
        >
          <strong>{{ inspection.type }}</strong>
          <p>Date: {{ inspection.details.date }}</p>
          <p>Location: {{ inspection.details.location }}</p>
        </li>
      </ul>
  
      <div v-if="selectedInspection" class="inspection-details">
        <h3>Inspection Details</h3>
        <p><strong>Type:</strong> {{ selectedInspection.type }}</p>
        <p><strong>Date:</strong> {{ selectedInspection.details.date }}</p>
        <p><strong>Location:</strong> {{ selectedInspection.details.location }}</p>
        <p><strong>Description:</strong> {{ selectedInspection.details.description || "N/A" }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchInspections } from "../services/inspectionService";
  
  export default {
    data() {
      return {
        inspections: [],
        selectedInspection: null,
      };
    },
    computed: {
      sortedInspections() {
        return this.inspections.sort(
          (a, b) => new Date(b.details.date) - new Date(a.details.date)
        );
      },
    },
    methods: {
      async loadInspections() {
        try {
          this.inspections = await fetchInspections();
        } catch (error) {
          console.error("Failed to load inspections:", error);
        }
      },
      selectInspection(inspection) {
        this.selectedInspection = inspection;
      },
    },
    created() {
      this.loadInspections();
    },
  };
  </script>
  
  <style scoped>
  .inspection-item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  .inspection-item:hover {
    background-color: #f0f0f0;
  }
  .inspection-details {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fdfdfd;
  }
  </style>
  