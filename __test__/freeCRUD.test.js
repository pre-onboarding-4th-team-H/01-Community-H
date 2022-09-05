// const request = require("supertest");
// const app = require("../app");
// const { v4: uuidv4 } = require("uuid");

// describe("----------자유게시판 CRUD----------", () => {
//   const email = `${uuidv4()}@gmail.com`;
//   const password = "!sa23Ad1";
//   let accessToken = null;
//   it("회원 가입", (done) => {
//     request(app)
//       .post("/user/join")
//       .send({
//         name: "게시판",
//         email,
//         password,
//         sex: "true",
//         phonenumber: "010-5555-6666",
//         age: "55",
//       })
//       .expect(201, done);
//   });

//   it("로그인", (done) => {
//     request(app)
//       .post("/user/login")
//       .send({
//         email,
//         password,
//       })
//       .expect((res) => {
//         accessToken = res.body;
//       })
//       .expect(201, done);
//   });

//   it("자유게시판 글 등록", (done) => {
//     console.log(accessToken);
//     request(app)
//       .post("/free")
//       .set("Authorization", `Bearer ${accessToken}`)
//       .send({
//         title: "자유게시판 글 등록",
//         content: "자유게시판 글 등록 내용",
//       })
//       .expect(201, done);
//   });
// });

//  .set('Authorization', 'abc123') // Works.
