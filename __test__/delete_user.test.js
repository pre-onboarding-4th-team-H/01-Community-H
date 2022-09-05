const request = require("supertest");
const app = require("../app");
const { v4: uuidv4 } = require("uuid");

const email = `${uuidv4()}@gmail.com`;
const password = "!sa23Ad1";
let accessToken = null;

describe("----------회원탈퇴 테스트를 위한 회원가입 및 로그인 테스트----------", () => {
  it("회원 가입", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "회원탈퇴테스트아이디",
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

describe("----------유저 회원탈퇴 테스트----------", () => {
  it("정상 회원탈퇴 테스트", (done) => {
    request(app)
      .delete("/user")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({
        password,
      })
      .expect(200, done);
  });
});
