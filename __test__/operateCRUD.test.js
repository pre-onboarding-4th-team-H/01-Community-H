const request = require("supertest");
const app = require("../app");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../database/models");
const { QueryTypes } = require("sequelize");
const email = `${uuidv4()}@gmail.com`;
const password = "!sa23Ad1";
let accessToken = null;

describe("----------운영게시판 CRUD를 위한 회원가입 로그인 테스트----------", () => {
  it("회원 가입", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "운영게시판",
        email,
        password,
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(201, done);
  });

  it("로그인", (done) => {
    request(app)
      .post("/user/login")
      .send({
        email,
        password,
      })
      .expect((res) => {
        accessToken = res.body;
      })
      .expect(201, done);
  });
});

describe("----------운영게시판 CRUD----------", () => {
  let postId = null;
  before(async () => {
    await sequelize.query(`UPDATE users SET tier=0 WHERE email='${email}'`, {
      type: QueryTypes.UPDATE,
    });
  });
  it("운영게시판 글 등록", (done) => {
    request(app)
      .post("/operate")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({
        title: "운영게시판 글 등록",
        content: "운영게시판 글 등록 내용",
      })
      .expect((res) => {
        postId = res.body.id;
      })
      .expect(200, done);
  });

  it("운영게시판 글 수정", (done) => {
    request(app)
      .patch(`/operate/${postId}`)
      .set("Authorization", `Bearer ${accessToken}`)
      .send({
        title: "운영게시판 글 등록 수정본",
        content: "운영게시판 글 등록 내용 수정본",
        password,
      })
      .expect(201, done);
  });

  it("운영게시글 조회", (done) => {
    request(app)
      .get(`/operate/${postId}`)
      .set("Authorization", `Bearer ${accessToken}`)
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });

  it("모든 운영게시글 조회", (done) => {
    request(app)
      .get("/operate")
      .set("Authorization", `Bearer ${accessToken}`)
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });

  it("특정 운영게시글 삭제", (done) => {
    request(app)
      .delete(`/operate/${postId}`)
      .set("Authorization", `Bearer ${accessToken}`)
      .send({ password })
      .expect((res) => {
        console.log(res.body);
      })
      .expect(200, done);
  });
});
