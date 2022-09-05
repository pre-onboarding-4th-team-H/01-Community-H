const express = require("express");
const router = express.Router();
const statisticsService = require("../services/statistics");

router.get("/gender", statisticsService.getUsersByGender);
router.get("/age", statisticsService.getUsersByAge);
router.get("/time/gender/:unit", statisticsService.genderPerPeriod);
router.get("/time/age/:unit", statisticsService.agePerPeriod);

module.exports = router;
