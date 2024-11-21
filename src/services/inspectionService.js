import axios from "axios";
import { Inspection } from "../models/InspectionModel";

const API_URL = "https://my-json-server.typicode.com/valentijnbeunder/myjsonserverAPI/inspections";

export const fetchInspections = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map((item) => new Inspection(item.type, item.details));
  } catch (error) {
    console.error("Error fetching inspections:", error);
    throw error;
  }
};
