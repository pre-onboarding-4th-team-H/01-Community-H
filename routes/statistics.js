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
 *   /statistics/gender:
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
 *                  type : object
 *                  example:
 *                        {
 *                          "count": [
 *                                     {
 *                                      "sex": 0,
 *                                      "count": 1
 *                                     }
 *                                   ],
 *                          "rows": [
 *                                     {
 *                                      "sex" : "female"
 *                                     }
 *                                  ]
 *                         }
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

/**
 * @swagger
 * paths:
 *   /statistics/age:
 *    get:
 *      summary:  "나이에 따른 유저 인원 수 조회"
 *      description: "나이에 따른 유저 인원 수 조회"
 *      tags: [Statistics]
 *      responses:
 *        "200":
 *          description: "나이에 따른 유저 인원 수 조회를 조회합니다."
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                        {
 *                          "count": [
 *                                     {
 *                                      "age": 21,
 *                                      "count": 6
 *                                     },
 *                                     {
 *                                      "age": 55,
 *                                      "count" : 1
 *                                     }
 *                                   ],
 *                          "rows": [
 *                                     {
 *                                      "age" : 21
 *                                     },
 *                                     {
 *                                      "age" : 55
 *                                     }
 *                                  ]
 *                         }
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

/**
 * @swagger
 * paths:
 *   /statistics/time/age/{unit}:
 *    get:
 *      summary:  "시간별 나이별 유저 인원 수 조회"
 *      description: "시간별 나이별 유저 인원 수 조회"
 *      tags: [Statistics]
 *      parameters :
 *        - in : path
 *          name : unit
 *          required : true
 *          description : hour/day
 *          schema :
 *             type : string
 *      responses:
 *        "200":
 *          description: "시간별 나이별 유저 인원 수를 조회합니다."
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                        {
 *                          "count": [
 *                                     {
 *                                      "age": 21,
 *                                      "count": 1
 *                                     }
 *                                   ],
 *                          "rows": [
 *                                     {
 *                                      "age": 21,
 *                                     }
 *                                  ]
 *                         }
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

/**
 * @swagger
 * paths:
 *   /statistics/time/gender/{unit}:
 *    get:
 *      summary:  "시간별 성별 유저 인원 수 조회"
 *      description: "시간별 성별 유저 인원 수 조회"
 *      tags: [Statistics]
 *      parameters :
 *        - in : path
 *          name : unit
 *          required : true
 *          description : hour/day
 *          schema :
 *             type : string
 *      responses:
 *        "200":
 *          description: "시간별 성별 유저 인원 수를 조회합니다."
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                        {
 *                          "count": [
 *                                     {
 *                                      "sex": 0,
 *                                      "count": 1
 *                                     }
 *                                   ],
 *                          "rows": [
 *                                     {
 *                                      "sex": "female",
 *                                     }
 *                                  ]
 *                         }
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
