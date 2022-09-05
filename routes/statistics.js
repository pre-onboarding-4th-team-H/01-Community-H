const express = require("express");
const router = express.Router();
const statisticsService = require("../services/statistics");

router.get("/gender", statisticsService.getUsersByGender);
router.get("/age", statisticsService.getUsersByAge);
router.get("/time/gender/:unit", statisticsService.genderPerPeriod);
router.get("/time/age/:unit", statisticsService.agePerPeriod);

module.exports = router;

/**
 * @swagger
 * paths:
 *   /gender:
 *    get:
 *      summary:  "성별에 따른 유저 인원 수 조회"
 *      description: "성별에 따른 유저 인원 수 조회"
 *      tags: [Statistics]
 *      responses:
 *        "200":
 *          description: "성별에 따른 유저 인원 수를 조회합니다."
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type : object
 *                  example:
 *                          [
 *                              {
 *                                  "id": "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
 *                                  "title": "tratorsync Functioe c NoticeBoard.save nistratorsync Function.create.",
 *                                  "User": {
 *                                        "name": "test"
 *                                    }
 *                                },
 *                                {
 *                                    "id": "be0d2c38-17af-4d16-a1c6-31067958a2ae",
 *                                    "title": "tratorsytorsync Function.create.",
 *                                    "User": {
 *                                        "name": "test"
 *                                    }
 *                                },
 *                                {
 *                                    "id": "d2dfa3a6-0da6-4d40-8cb1-58768e5cfc58",
 *                                    "title": "tratorsync Functioe c NoticeBoard.save nistratorsync Function.create.",
 *                                    "User": {
 *                                        "name": "test"
 *                                    }
 *                                }
 *                            ]
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.name
 *                           } }
 *
 */
