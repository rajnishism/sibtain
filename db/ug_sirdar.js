import mongoose from "mongoose";

const ugSirdarSchema = new mongoose.Schema({
  ventillation: {
    type: String,
  },
  support_of_strata: {
    type: String,
  },
  goaf_edges: {
    type: String,
  },
  fencing: {
    type: String,
  },
  sanitation: {
    type: String,
  },
});

export const UgSirdar = mongoose.model("sirdar", ugSirdarSchema);
