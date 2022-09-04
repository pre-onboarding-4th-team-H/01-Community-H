const request = require("supertest");
const app = require("../app");
const { v4: uuidv4 } = require("uuid");

describe("----------POST /join : SUCCESS----------", () => {
  it("정상 회원가입", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "황윤상",
        email: `${uuidv4()}@gmail.com`,
        password: "!sa23Ad1",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(201, done);
  });
});

describe("----------POST /join : FAIL----------", () => {
  it("이름을 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        email: "dlandif2@gmail.com",
        password: "!sa23Ad1",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("비밀번호를 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("비밀번호 형식을 지키지 않은 경우 - 대문자 미입력", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        password: "!123aa",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("비밀번호 형식을 지키지 않은 경우 - 특수문자 미입력", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        password: "Aers12345",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("비밀번호 형식을 지키지 않은 경우 - 숫자 미입력", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        password: "%^@AAefavc",
        sex: "true",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });
  it("성별 미입력", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        password: "Aers12345",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("성별에 boolean값을 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        sex: "GENDER",
        password: "Aers12345",
        phonenumber: "010-5555-6666",
        age: "55",
      })
      .expect(400, done);
  });

  it("핸드폰 번호를 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        sex: "GENDER",
        password: "Aers12345",
        phonenumber: "",
        age: "55",
      })
      .expect(400, done);
  });

  it("나이 입력하지 않은 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        sex: "GENDER",
        password: "Aers12345",
        phonenumber: "010-5555-6666",
      })
      .expect(400, done);
  });

  it("나이 필드에 문자 입력한 경우", (done) => {
    request(app)
      .post("/user/join")
      .send({
        name: "이무열",
        email: "dlandif2@gmail.com",
        sex: "GENDER",
        password: "Aers12345",
        phonenumber: "010-5555-6666",
        age: "ten",
      })
      .expect(400, done);
  });
});
