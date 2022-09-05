const express = require("express");
const router = express.Router();
const { statisticsService } = require("../services/statistics");

router.get("/statistics/gender", statisticsService.getPosts);

module.exports = router;
