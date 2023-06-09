const express = require("express");
const router = express.Router();
const moodQueries = require("../db/queries/mood-queries");

router.get(`/`, (req, res) => {
  //displays the 15 moods

  //returns an array of mood objects with id, name and color
  moodQueries
    .getAllMoods()
    .then((moods) => {
      return res.json({ moods });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});

router.get("/:dayId", (req, res) => {
  // Show users mood selections for the current day
  const dayId = req.params.dayId;

  // returns an array of selectedMood objects with name, mood_id,
  // created_date and rating in order of created date DESC (most recent first)

  moodQueries
    .getMoodSelectionByDayId(dayId)
    .then((selectedMoods) => {
      return res.json({ selectedMoods });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});

router.get("/today/:todayDate", (req, res) => {
  const todayDate = req.params.todayDate;

  // returns an array of selectedMood objects with name, mood_id,
  // created_date and rating in order of created date DESC (most recent first)

  moodQueries
    .getMoodSelectionForToday(todayDate)
    .then((selectedMoods) => {
      return res.json({ selectedMoods });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});


router.post("/selection/delete", (req, res) => {
  const dayId = req.body.dayId;
  const moodId = req.body.moodId;

  moodQueries
    .getMoodSelectionId(moodId, dayId)
    .then((idToDelete) => {
      return moodQueries.deleteMoodSelectionById(idToDelete);
    })
    .then((deletedSelection) => {
      return res.json({ deletedSelection });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});




router.post("/selection", (req, res) => {
  //User chooses mood selections for the day

  const dayId = req.body.dayId;
  const newMoodId = req.body.moodId;

  //gives a count of how many moods are selected for the day
  const countPromise = moodQueries.dailyMoodSelectionsCount(dayId);

  // //gives the olds mood_selection_id for current day
  const idPromise = moodQueries.oldestMoodSelectionByDayId(dayId);

  Promise.all([countPromise, idPromise])
    .then((results) => {
      const count = Number(results[0]);
      const id = results[1];
      moodToDelete = id;

      if (count >= 3) {
        return moodQueries
          .deleteMoodSelectionById(moodToDelete)
          .then((result) => {
            return moodQueries.insertMoodSelection(newMoodId, dayId);
          });
      } else {
        return moodQueries.insertMoodSelection(newMoodId, dayId);
      }
    })
    .then((result) => {
      //should be whichever mood selection was inserted
      return res.json({ result });
    })
    .catch((err) => {
      res.status(418).json({ error: err.message });
    });
});


module.exports = router;
