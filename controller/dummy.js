import { Report } from "../db/dummy.js";

export const getData = (req, res) => {
  Report.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createData = (req, res) => {
  try {
    // console.log(req.body);
    const newReport = new Report(req.body);
    newReport.save();
    res.send("added");
  } catch (err) {
    res.send(err);
  }
};
