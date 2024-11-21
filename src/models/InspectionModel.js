export class Inspection {
    constructor(type, details) {
      this.type = type;
      this.details = new InspectionDetails(details);
    }
  }
  
  class InspectionDetails {
    constructor({ location, newDamage, damageType, date, urgentActionRequired, description, maintenanceType, costEstimate, installationType, reportedIssues, testProcedure, approved, remarks, currentSituation, modificationLocation, performedBy, modificationDescription, actionToTake }) {
      this.location = location || "";
      this.newDamage = newDamage || false;
      this.damageType = damageType || "";
      this.date = date || "";
      this.urgentActionRequired = urgentActionRequired || false;
      this.description = description || "";
      this.maintenanceType = maintenanceType || "";
      this.costEstimate = costEstimate || "";
      this.installationType = installationType || "";
      this.reportedIssues = reportedIssues || "";
      this.testProcedure = testProcedure || "";
      this.approved = approved || false;
      this.remarks = remarks || "";
      this.currentSituation = currentSituation || "";
      this.modificationLocation = modificationLocation || "";
      this.performedBy = performedBy || "";
      this.modificationDescription = modificationDescription || "";
      this.actionToTake = actionToTake || "";
    }
  }
  