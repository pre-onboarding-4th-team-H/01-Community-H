const request = require("supertest");
const app = require("../app");
const { v4: uuidv4 } = require("uuid");

describe("----------POST /login : SUCCESS----------", () => {
  const email = `${uuidv4()}@gmail.com`;
  const password = "!sa23Ad1";
  it("회원 가입", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "로그인테스트아이디",
        email,
        password,
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(201, done);
  });

  it("정상 로그인", (done) => {
    request(app)
      .post("/user/login")
      .send({
        email,
        password,
      })
      .expect(201, done);
  });

  it("비밀번호를 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/login")
      .send({
        email,
      })
      .expect(400, done);
  });

  it("비밀번호가 틀린 경우", (done) => {
    request(app)
      .post("/user/login")
      .send({
        email,
        password: "wrongPassword",
      })
      .expect(400, done);
  });
});
