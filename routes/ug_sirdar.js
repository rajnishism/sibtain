import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import express from "express";
const router = express.Router();

import {
  getData,
  createData,
  deleteData,
  //   getAppointements,
  //   deleteAppointment,
  //   updateAppointment,
} from "../controller/ug_sirdar.js";

router.get("/", getData);
// router.get("/:id", getAppointement);
router.post("/", createData);
// router.patch("/:id", updateAppointment);
router.delete("/:id", deleteData);
export default router;
