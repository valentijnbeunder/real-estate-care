import axios from "axios";
import { Inspection } from "../models/InspectionModel";

const EXECUTED_API_URL = "https://my-json-server.typicode.com/valentijnbeunder/myjsonserverAPI/inspections";
const ASSIGNED_API_URL = "https://my-json-server.typicode.com/valentijnbeunder/myjsonserverAPI2/assigned-reports";

export const fetchInspections = async () => {
  try {
    const response = await axios.get(EXECUTED_API_URL);
    return response.data.map((item) => new Inspection(item.type, item.details));
  } catch (error) {
    console.error("Error fetching executed inspections:", error);
    throw error;
  }
};

export const fetchAssignedInspections = async () => {
  try {
    const response = await axios.get(ASSIGNED_API_URL);
    return response.data.map((item) => new Inspection(item.type, item.details));
  } catch (error) {
    console.error("Error fetching assigned inspections:", error);
    throw error;
  }
};
