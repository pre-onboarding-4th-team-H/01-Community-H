const express = require("express");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const { errorHandler } = require("../middlewares/errorHandler");
const {
  addPost,
  getPost,
  getPosts,
  deletePost,
  setPost,
} = require("../services/freeBoard");
const router = express.Router();

router.get("/posts", getPosts);
router.get("/post/:id", getPost);
router.patch("/post", boardValidator(), setPost);
router.delete("/post/:id", deletePost);
router.post("/post", boardValidator(), addPost);

/**
 * @swagger
 * paths:
 *   /posts:
 *    get:
 *      summary:  "게시글 데이터 전체 조회"
 *      description: "게시글 데이터 전체 조회"
 *      tags: [Boards]
 *      responses:
 *        "200":
 *          description: "전체 게시글 정보"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                          [
 *                            { "id": 1, "title": "제목1","User" : {"name" : "철수"} },
 *                            { "id": 2, "title": "제목2","User" : {"name" : "미애"} },
 *                            { "id": 3, "title": "제목3","User" : {"name" : "영희"} },
 *                          ]
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
 *   /post/{id}:
 *    get:
 *      summary:  "특정 id 게시글 데이터 조회"
 *      description: "특정 id 게시글 데이터 조회"
 *      tags: [Boards]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 아이디
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "특정 id 게시글 데이터"
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type : object
 *                  example:
 *                            { "id": 1, "title": "제목1","User" : {"name" : "철수"},"content" : "내용1" }
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
 *   /post:
 *    patch:
 *      summary:  "특정 id 게시글 데이터 수정"
 *      description: "특정 id 게시글 데이터 수정"
 *      tags: [Boards]
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
 *          description: "특정 id 게시글 데이터 수정 성공"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                            { message: "Posting is updated" }
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
 *   /post:
 *    post:
 *      summary:  "게시글 데이터 생성"
 *      description: "게시글 데이터 생성"
 *      tags: [Boards]
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
 *          description: "게시글 데이터 생성 성공"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                            { message: "Posting is created" }
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
 *   /post/{id}:
 *    delete:
 *      summary:  "특정 id 게시글 데이터 삭제"
 *      description: "특정 id 게시글 데이터 삭제"
 *      tags: [Boards]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 게시글 아이디
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "특정 id 게시글 데이터 삭제"
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
 *                           } }
 *
 */

module.exports = router;
