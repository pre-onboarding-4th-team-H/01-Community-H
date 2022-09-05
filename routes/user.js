const express = require("express");
const loginRequired = require("../middlewares/loginRequired");
const router = express.Router();
const {
  userJoinValidator,
  userSetvalidator,
} = require("../middlewares/validator/userValidator");
const { userService } = require("../services/index");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

// user create에 대한 api
router.post("/join", userJoinValidator(), userService.addUser);
router.patch("/", loginRequired, userSetvalidator(), userService.setUser);
router.post("/login", passwordValidator(), userService.addUserToken);
router.delete("/", loginRequired, passwordValidator(), userService.deleteUser);
module.exports = router;

/**
 * @swagger
 * paths:
 *   /join:
 *    get:
 *      summary:  "유저 회원가입"
 *      description: "유저 회원가입을 위한 API"
 *      tags: [User]
 *      responses:
 *        "201":
 *          description: "회원가입 성공"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                     field: error.field
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /login:
 *    get:
 *      summary:  "유저 로그인"
 *      description: "유저 로그인"
 *      tags: [User]
 *      parameters :
 *        - in : body
 *          name : email
 *          required : true
 *          description : 회원 이메일
 *          schema :
 *             type : Email Form
 *        - in : body
 *          name : password
 *          required : true
 *          description : 회원 비밀번호
 *          schema :
 *             type : String
 *      responses:
 *        "200":
 *          description: "로그인 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type:
 *                items:
 *                  type : object
 *                  example:
 *                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MDUwOGNjMS04NTliLTQ5ZWEtYWY0MS0xZjdhNmI1MmJhNDMiLCJpYXQiOjE2NjIzNjQ1MTJ9.7fA0MtPacjDAVsQvFYvF0OsQg6VfQnSd0Pvp1C4UHNQ"
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /delete:
 *    delete:
 *      summary:  "유저 회원탈퇴"
 *      description: "유저 회원탈퇴를 위한 API"
 *      tags: [User]
 *      parameters :
 *         - in : body
 *           name : password
 *           required : true
 *           description : 회원 탈퇴를 위한 비밀번호 입력
 *           schema :
 *              type : String
 *              example :
 *                {password : !Test@@123}
 *      responses:
 *        "200":
 *          description: "회원탈퇴 성공"
 *
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 *
 */

/**
 * @swagger
 * paths:
 *   /patch:
 *    patch:
 *      summary:  "유저 정보 수정"
 *      description: "유저 정보 수정을 위한 API"
 *      tags: [User]
 *      parameters :
 *         - in : body
 *           name : name
 *           required : true
 *           description : 생성할 데이터
 *           schema :
 *              type : object
 *         - in : body
 *           name : password
 *           required : true
 *           description : 기존 비밀번호
 *           schema :
 *              type : object
 *         - in : body
 *           name : newPassword
 *           required : true
 *           description : 변경할 비밀번호
 *           schema :
 *              type : object
 *         - in : body
 *           name : newPasswordCheck
 *           required : true
 *           description : 변경할 비밀번호 확인
 *           schema :
 *              type : object
 *         - in : body
 *           name : sex
 *           required : true
 *           description : 성별
 *           schema :
 *              type : object
 *         - in : body
 *           name : phonenumber
 *           required : true
 *           description : 전화번호
 *           schema :
 *              type : object
 *         - in : body
 *           name : age
 *           required : true
 *           description : 나이
 *           schema :
 *              type : object
 *      responses:
 *        "201":
 *          description: "유저 수정 성공"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *        "400":
 *          description: Bad request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                example :
 *                  { error: {
 *                     message: error.message,
 *                           } }
 *
 */
