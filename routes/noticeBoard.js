const { Router } = require("express");
const { noticeService } = require("../services");
const adminRequired = require("../middlewares/adminRequired");
const loginRequired = require("../middlewares/loginRequired");
const { boardValidator } = require("../middlewares/validator/boardValidator");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

const router = Router();

router.post(
  "/",
  loginRequired,
  adminRequired,
  boardValidator(),
  noticeService.addPost
);
router.get("/:id", noticeService.getPost);
router.get("/", noticeService.getPosts);
router.patch(
  "/:id",
  loginRequired,
  adminRequired,
  boardValidator(),
  passwordValidator(),
  noticeService.setPost
);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  passwordValidator(),
  noticeService.deletePost
);

/**
 * @swagger
 * paths:
 *   /notice:
 *    post:
 *      summary:  "공지사항 게시글 데이터 생성"
 *      description: "공지사항 게시글 데이터 생성"
 *      tags: [Notice Board]
 *      parameters :
 *         - in : headers
 *           name : authorization
 *           required : true
 *           description : jwt 토큰
 *           schema :
 *           type : string
 *         - in : body
 *           name : data
 *           required : true
 *           description : 생성할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {title : 생성할 제목, content : 생성할 내용}
 *      responses:
 *        "200":
 *          description: "공지사항 게시글 데이터 생성 성공"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                          {
 *                              "id": "eb5a713e-ab10-4463-87c1-dfaab7653793",
 *                              "title": "tratorsytorsync Function.create.",
 *                              "content": "teion.creaytorsync Function.creat",
 *                              "UserId": "5d5c7669-9ba8-4550-87b1-f397f5d3084c",
 *                              "updatedAt": "2022-09-05T07:48:50.759Z",
 *                              "createdAt": "2022-09-05T07:48:50.759Z"
 *                          }
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
 *   /notice:
 *    get:
 *      summary:  "공지사항 게시글 데이터 전체 조회"
 *      description: "공지사항 게시글 데이터 전체 조회"
 *      tags: [Notice Board]
 *      responses:
 *        "200":
 *          description: "공지사항 전체 게시글을 조회합니다."
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

/**
 * @swagger
 * paths:
 *   /notice/{id}:
 *    get:
 *      summary:  "공지사항 특정 게시글 데이터 조회"
 *      description: "공지사항 특정 게시글 데이터 조회"
 *      tags: [Notice Board]
 *      parameters :
 *        - in : path
 *          name : id
 *          required : true
 *          description : 공지사항 게시글 아이디
 *          schema :
 *             type : uuid
 *      responses:
 *        "200":
 *          description: "공지사항 특정 게시글 데이터"
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
 *   /notice/{id}:
 *    patch:
 *      summary:  "공지사항 특정 게시글 데이터 수정"
 *      description: "공지사항 특정 게시글 데이터 수정"
 *      tags: [Notice Board]
 *      parameters :
 *         - in : headers
 *           name : authorization
 *           required : true
 *           description : jwt 토큰
 *           schema :
 *           type : string
 *         - in : path
 *           name : id
 *           required : true
 *           description : 공지사항 게시글 아이디
 *           schema :
 *           type : uuid
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {title : 수정할 제목, content : 수정할 내용, password: 회원 비밀번호}
 *      responses:
 *        "200":
 *          description: "공지사항 id 게시글 데이터 수정 성공"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  type : object
 *                  example:
 *                            {
 *                                "id": "8b6ccaf9-4053-48ca-9378-7eaef58eb157",
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
 *   /post/{id}:
 *    delete:
 *      summary:  "공지사항 특정 게시글 데이터 삭제"
 *      description: "공지사항 특정 게시글 데이터 삭제"
 *      tags: [Notice Board]
 *      parameters :
 *         - in : headers
 *           name : authorization
 *           required : true
 *           description : jwt 토큰
 *           schema :
 *           type : string
 *         - in : path
 *           name : id
 *           required : true
 *           description : 공지사항 게시글 아이디
 *           schema :
 *           type : uuid
 *         - in : body
 *           name : data
 *           required : true
 *           description : 수정할 데이터
 *           schema :
 *              type : object
 *              example :
 *                {password: 회원 비밀번호}
 *      responses:
 *        "200":
 *          description: "공지사항 id 게시글 데이터 삭제"
 *          content:
 *            application/json:
 *              schema:
 *                  type : object
 *                  example:
 *                            { message: "게시글이 삭제되었습니다." }
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
