import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  inspectorInfo: {
    inspectorId: {
      type: String,
    },
    name: {
      type: String,
    },
    contactNo: {
      type: String,
    },
  },
  shiftInfo: {
    shiftId: {
      type: String,
    },
    shiftDate: {
      type: String,
    },
    shiftStartTime: {
      type: String,
    },
    shiftEndTime: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  entryInfo: {
    entryId: {
      type: String,
    },
    entryTime: {
      type: String,
    },
    entryType: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  incidentInfo: {
    incidentId: {
      type: String,
    },
    incidentType: {
      type: String,
    },
    injuries: {
      type: String,
    },
    damage: {
      type: String,
    },
  },
});
export const Report = mongoose.model("report", reportSchema);
