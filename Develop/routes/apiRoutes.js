const router = require("express").Router();
const db = require("../models/workout");
const path = require("path");

router.post("/api/workouts", ({ body }, res) => {
  console.log("THIS RAN ")
  db.create({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

// router.post("/api/workouts/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
router.put("/api/workouts/:id", (req, res) => {
  db.findByIdAndUpdate(req.params.id,{
    $push:{exercises:req.body}
  }).then((workout => {
    res.json(workout)
  }))
})



router.get("/api/workouts/range", (req, res) => {
  db.find()
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;