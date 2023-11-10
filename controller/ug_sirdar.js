import { UgSirdar } from "../db/ug_sirdar.js";

export const getData = (req, res) => {
  UgSirdar.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createData = (req, res) => {
  try {
    //console.log(req.body);
    const newAppointment = new UgSirdar(req.body);
    newAppointment.save();
    res.send("added");
  } catch (err) {
    res.send(err);
  }
};

// export const getAppointement = (req, res) => {
//   const id = req.params.id;
//   Appointement.findOne({ _id: id })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const updateAppointment = (req, res) => {
//   const id = req.params.id;
//   Appointement.updateOne({ _id: id }, { $set: req.body })
//     .then(res.send(`Blog with id : ${id} updated sucessfully to -> new one `))
//     .catch((err) => res.send("error"));
// };

export const deleteData = (req, res) => {
  const id = req.params.id;

  UgSirdar.deleteOne({ _id: id })
    .then(() => {
      console.log(`Data with id: ${id} is deleted`);
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};
