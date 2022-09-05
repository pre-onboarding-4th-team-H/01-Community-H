const express = require("express");
const router = express.Router();
const { freeBoardService } = require("../services");
const loginRequired = require("../middlewares/loginRequired");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

router.get("/", freeBoardService.getPosts);
router.get("/:id", freeBoardService.getPost);
router.patch(
  "/:id",
  loginRequired,
  boardValidator(),
  passwordValidator(),
  freeBoardService.setPost
);
router.delete(
  "/:id",
  loginRequired,
  passwordValidator(),
  freeBoardService.deletePost
);
router.post("/", boardValidator(), freeBoardService.addPost);

/**
 * @swagger
 * paths:
 *   /free:
 *    get:
 *      summary:  "자유게시판 게시글 데이터 전체 조회"
 *      description: "자유게시판 게시글 데이터 전체 조회"
 *      tags: [Free Board]
 *      responses:
 *        "200":
 *          description: "자유게시판 전체 게시글 정보"
 *          content:
 *            application/json:
 *              schema:
 *                  type : array
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

/**
 * @swagger
 * paths:
 *   /free/{id}:
 *    get:
 *      summary:  "자유게시판 특정 게시글 데이터 조회"
 *      description: "자유게시판 특정 게시글 데이터 조회"
 *      tags: [Free Board]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 아이디
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "자유게시판 특정 게시글 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                              {
 *                                  "id": "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
 *                                  "title": "tratorsync Functioe c NoticeBoard.save nistratorsync Function.create.",
 *                                  "content": "testat atat async NoticeBoard.save nistratorsync Function.creat",
 *                                  "UserId": "5d5c7669-9ba8-4550-87b1-f397f5d3084c",
 *                                  "User": {
 *                                      "name": "test"
 *                                  }
 *                              }
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
 *   /free:
 *    patch:
 *      summary:  "자유게시판 특정 게시글 데이터 수정"
 *      description: "자유게시판 특정 게시글 데이터 수정"
 *      tags: [Free Board]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {id : uuid, categoryId : uuid, title : 수정할 제목, content : 수정할 내용}
 *      responses:
 *        "200":
 *          description: "자유게시판 특정 게시글 데이터 수정 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                            {
 *                                "id": "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
 *                                "categoryId":"31dfde0b-19e4-453d-80c6-2044fa89d3a2",
 *                                "title": "update",
 *                                "content": "test",
 *                                "UserId": "5d5c7669-9ba8-4550-87b1-f397f5d3084c",
 *                                "User": {
 *                                    "name": "test"
 *                                }
 *                            }
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
 *   /free:
 *    post:
 *      summary:  "자유게시판 게시글 데이터 생성"
 *      description: "자유게시판 게시글 데이터 생성"
 *      tags: [Free Board]
 *      parameters :
 *         - in : body
 *           name : data
 *           required : true
 *           description : 생성할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {categoryId : uuid, title : 생성할 제목, content : 생성할 내용}
 *      responses:
 *        "200":
 *          description: "자유게시판 게시글 데이터 생성 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                            {
 *                                "id": "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
 *                                "categoryId":"31dfde0b-19e4-453d-80c6-2044fa89d3a2",
 *                                "title": "update",
 *                                "content": "test",
 *                                "UserId": "5d5c7669-9ba8-4550-87b1-f397f5d3084c",
 *                                "User": {
 *                                    "name": "test"
 *                                }
 *                            }
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
 *   /free/{id}:
 *    delete:
 *      summary:  "자유게시판 특정 게시글 데이터 삭제"
 *      description: "자유게시판 특정 게시글 데이터 삭제"
 *      tags: [Free Board]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 아이디
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "자유게시판 특정 게시글 데이터 삭제"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                            { message: "Posting is deleted" }
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

module.exports = router;
