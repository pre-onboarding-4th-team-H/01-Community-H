# ๐๋ชฉ์ฐจ
[Community Service](#-community-service)

[์๊ตฌ์ฌํญ ๋ถ์](#-์๊ตฌ์ฌํญ-๋ถ์)

[API ๋ฌธ์](#-api-๋ฌธ์)

[ํ์คํธ ์ผ์ด์ค](#-ํ์คํธ-์ผ์ด์ค)

[์ปจ๋ฒค์](#-์ปจ๋ฒค์)

[ERD](#-erd)

[ํด๋ ๊ตฌ์กฐ](#-ํด๋-๊ตฌ์กฐ)

[ํจํค์ง](#-ํจํค์ง)

[๊ธฐ์  ์คํ](#-๊ธฐ์ -์คํ)

[์ญํ ๋ถ๋ด ๋ฐ ํธ๋ฌ๋ธ ์ํ](#-์ญํ ๋ถ๋ด-๋ฐ-ํธ๋ฌ๋ธ-์ํ)

# ๐ฉ Community Service

**ํ์ ๋ฑ๊ธ์ ๋ฅผ ํตํ ๊ฒ์ํ ์ ๊ทผ ์ ํ๊ณผ ์ฌ์ฉ์ ์ด์ฉ ํต๊ณ ๋ฐ์ดํฐ๋ฅผ ๋ณผ ์ ์๋ ์ปค๋ฎค๋ํฐ ์๋น์ค์๋๋ค.**

### โ ๊ธฐ๋ฅ ์ค๋ช

- ํ์ ๊ฐ์, ์์ , ํํด, ๋ก๊ทธ์ธ์ด ๊ฐ๋ฅํฉ๋๋ค.
- ๊ฒ์ํ ์ข๋ฅ๋ ๊ณต์ง์ฌํญ, ์ด์๊ฒ์ํ, ์์ ๊ฒ์ํ์ด ์์ต๋๋ค.
- ํ์ ๋ฑ๊ธ์ ๋ฐ๋ผ ๊ฒ์ํ ๊ธฐ๋ฅ ์ ํ์ด ์์ต๋๋ค.
- ์ฑ๋ณ, ๋์ด, ์ ์ ์๊ฐ์ ๋ฐ๋ฅธ ํต๊ณ ๋ฐ์ดํฐ ์กฐํ๊ฐ ๊ฐ๋ฅํฉ๋๋ค.

# โ ์๊ตฌ์ฌํญ ๋ถ์

### โ ๊ฒ์ํ API ๊ฐ๋ฐ
- ์์ ๊ฒ์ํ์ ๊ฒฝ์ฐ ๋ค์์ฑ์ ์ํด ์นดํ๊ณ ๋ฆฌ๋ฅผ ์ถ๊ฐํ์ต๋๋ค.
- ํ์ ๋ฑ๊ธ์ ๋ฐ๋ฅธ ๊ฒ์ํ ๊ธฐ๋ฅ ์ ํ์ ์ํด ๊ด๋ฆฌ์ ๋ฑ๊ธ ํ์ธ ๋ฏธ๋ค์จ์ด๋ฅผ ๊ตฌํํ์ต๋๋ค.
- ๋ชจ๋  ๊ฒ์ํ์ ๋ก๊ทธ์ธํ ์ ์ ๋ง ์ด์ฉํ  ์ ์๋๋ก ๋ก๊ทธ์ธ ํ์ธ ๋ฏธ๋ค์จ์ด๋ฅผ ๊ตฌํํ์ต๋๋ค.
- ๊ฒ์ํ ๊ธ ์์ , ์ญ์  ์ ๊ธ ์์ฑ์๋ฅผ ํ๋ณํ๋๋ก DB์ ์๋ ฅ๋ ํด๋น ๊ฒ์๊ธ์ userId์ ํ ํฐ์ userId์ ์ผ์น ์ฌ๋ถ๋ฅผ ๊ตฌํํ์ต๋๋ค.
- ๊ฒ์ํ ์์ , ์ญ์ ์ ๊ฒฝ์ฐ, ๋๋ธ์ฒดํฌ๋ก ๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ๋๋ก ๊ตฌํํ์ต๋๋ค.
- ๊ฒ์ํ ์์ฑ, ์์ , ์ญ์  ์ ์๋ ฅ ๋ฐ์ดํฐ๋ฅผ ๊ฒ์ฆํ๋ validator๋ฅผ ์ถ๊ฐํ์ต๋๋ค.
    
    
    | ์ ๊ทผ ๊ถํ | ๊ด๋ฆฌ์ | ์ผ๋ฐ ์ ์  |
    | --- | --- | --- |
    | ๊ณต์ง์ฌํญ | CRUD | R |
    | ์ด์ ๊ฒ์ํ | CRUD  | ์ ๊ทผ ๋ถ๊ฐ |
    | ์์  ๊ฒ์ํ | CRUD  | CRUD  |
    | ์นดํ๊ณ ๋ฆฌ | CRUD  | R  |

### โ ํ์ API ๊ฐ๋ฐ

- ํ์๊ฐ์, JWT๋ฅผ ์ด์ฉํ ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ๊ตฌํํ์ต๋๋ค.
- ๋ง์ง๋ง ์ ์ ์๊ฐ์ ์ธก์ ํ๊ธฐ ์ํด ํ์ํ์ด๋ธ์ lastLog ํ๋๋ฅผ ์ถ๊ฐํ์ต๋๋ค.
- ํ์๊ฐ์ ์ ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ์ ์ํด validator๋ฅผ ๊ตฌํํ์ต๋๋ค.
- ํ์ ์์ , ํํด์ ๊ฒฝ์ฐ, ๋๋ธ์ฒดํฌ๋ก ๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ๋๋ก ๊ตฌํํ์ต๋๋ค.
- ๊ฒ์ํ ๊ธฐ๋ฅ ์ ํ์ ์ํ ํ์ ๋ฑ๊ธ์ ๊ด๋ฆฌ์(0)์ ์ผ๋ฐ ์ ์ (1)๋ก ๊ตฌ๋ถํ์ต๋๋ค.

### โ ์ด์ฉ ํต๊ณ ์ง๊ณ

- ์ฑ๋ณ / ๋์ด / ์ ์ ์๊ฐ๋ณ๋ก ํต๊ณ ๋ถ์์ ํ๋๋ก ๊ตฌํํ์ต๋๋ค.
- ์ ์ ์๊ฐ์ ๊ฒฝ์ฐ, ๋ก๊ทธ์ธ ์ดํ์๋ ์ ์ ๊ฐ ๊ณ์ ํ๋์ ํ  ์ ์๊ธฐ ๋๋ฌธ์ loginRequired์ lastLog๋ฅผ ์๋ฐ์ดํธํ๋ ์ฟผ๋ฆฌ๋ฅผ ๋ฃ์ด ๋ง์ง๋ง ์ ์ ์๊ฐ์ ์ ์ ์๊ฒ ๊ตฌํํ์ต๋๋ค.

# ๐ API ๋ฌธ์
1) npm start๋ก ์๋ฒ ๊ตฌ๋ -> localhost/{port}/api-docs

2) [Swagger PDF ํ์ผ](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8eccf573-c06c-4fe8-8a77-4b0d733458fc/screencapture-localhost-8080-api-docs-2022-09-05-18_05_52.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220905T090835Z&X-Amz-Expires=86400&X-Amz-Signature=0c5831ded302797166c59ff652d9a15388e9717c037d4a96f45d5feb63743941&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screencapture-localhost-8080-api-docs-2022-09-05-18_05_52.pdf%22&x-id=GetObject)

# ๐ ํ์คํธ ์ผ์ด์ค

- unitTest๋ mocha์ supertest๋ก ์งํํ์ต๋๋ค.
- ํ์ / ๊ฒ์ํ CRUD ํ์คํธ ์๋ฃํ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/80232260/188407050-c2668aa4-b8a5-4d27-80a0-03406c8946a3.png)

# ๐ก ์ปจ๋ฒค์

### โ camelCase / PascalCase

- **ํ์ผ, ์์ฑ์, ๋ณ์, ๋ฉ์๋๋ช**์ **camelCase**๋ฅผ ์ฌ์ฉํฉ๋๋ค.
- **ํด๋์ค๋ช**์ **PascalCase**๋ฅผ ์ฌ์ฉํฉ๋๋ค.

### โ Lint ๊ท์น

| ๋ค์ฌ์ฐ๊ธฐ 2์นธ | ํญ ์ฌ์ฉ x |
| --- | --- |
| double quote ์ฌ์ฉ. | commonJS ์ฌ์ฉ |
| ๋ง์ง๋ง ์ฝค๋ง ์ฌ์ฉ | ํ์ค ์ต๋ ๊ธ์์: 80 |
| var๋ ์ฌ์ฉํ์ง ์์ต๋๋ค. | ์ธ๋ฏธ ์ฝ๋ก  ์ฌ์ฉ์ ํ์ฉํฉ๋๋ค. |

### โ ๋ฉ์๋๋ช ๊ท์น

- ์ ์ฒด์กฐํ๋ ๋ณต์ํ์ผ๋ก ์์ฑํฉ๋๋ค.

| ์์ฒญ ๋ด์ฉ  | service | example | repo | example |
| --- | --- | --- | --- | --- |
| ์์ฑ | add | addPost | create | createPost |
| ์กฐํ | get | getPost | find์์ฒญ๊ฐ์ฒด | findPost |
| ์ ์ฒด์กฐํ | get | getPosts | find์์ฒญ๊ฐ์ฒดs | findPosts |
| ์์  | set | setPost | update | updatePost |
| ์ญ์  | delete | deletePost | destroy | destroyPost |

### โ ์ฃผ์

- ๋ฉ์๋ ๋ฐ ์ฝ๋ ์ค๋ช์ ์ฃผ์์ผ๋ก ๊ฐ๋จํ๊ฒ ์์ฑํฉ๋๋ค.

### โ Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[๊น ์ปค๋ฐ ์ปจ๋ฒค์ ์ฐธ๊ณ  ์ฌ์ดํธ](https://overcome-the-limits.tistory.com/entry/ํ์-ํ์์-์ํ-๊ธฐ๋ณธ์ ์ธ-git-์ปค๋ฐ์ปจ๋ฒค์-์ค์ ํ๊ธฐ)

# ๐ ERD
![Untitled](https://user-images.githubusercontent.com/80232260/188364873-66642971-d272-4fac-bdfd-a6fa8d2815b7.png)

# ๐ ํด๋ ๊ตฌ์กฐ
![image](https://user-images.githubusercontent.com/80232260/188411428-3d51c7d1-ca2e-4ad1-b3b3-b79854cc9ec2.png)

# โ ํจํค์ง

```json
{
  "name": "01-community-h",
  "version": "1.0.0",
  "description": "community",
  "main": "server.js",
  "scripts": {
    "test": "npx cross-env NODE_ENV=test mocha __test__/*.test.js",
    "start": "nodemon server.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/pre-onboarding-4th-team-H/01-Community-H"
  },
  "keywords": [],
  "author": "pre-onboarding-4th-team-H",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/pre-onboarding-4th-team-H/01-Community-H/issues"
  },
  "homepage": "https://github.com/pre-onboarding-4th-team-H/01-Community-H#readme",
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.10.0",
    "mysql2": "^2.3.3",
    "sequelize": "^6.21.4",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.9",
    "dotenv": "^16.0.2",
    "eslint": "^8.23.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "prettier": "^2.7.1",
    "sequelize-cli": "^6.4.1",
    "supertest": "^6.2.4",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.5.0"
  }
}
```

# โก ๊ธฐ์  ์คํ
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-FCC624?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-61DAFB?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Mocha-F8DC75?style=for-the-badge&logo=Mocha&logoColor=white">

# โ ์ญํ ๋ถ๋ด ๋ฐ ํธ๋ฌ๋ธ ์ํ

|  | ๋ด๋น ์ญํ  | ์ด์ / ํด๊ฒฐ๊ณผ์  |
| --- | --- | --- |
| ๊น์์ฐฌ | - ๋ชจ๋ธ๋ง / ์์ ๊ฒ์ํ CRUD, ์ด์ ๊ฒ์ํ CRUD ๊ตฌํ, ํต๊ณ ๊ตฌํ <br> - swagger ์ค์ , freeBoard swagger ์์ฑ | swagger ๋ฌธ์ ์์ฑ์ด๋ ์ ์  ํ์ด๋ธ์์ ์ฑ๋ณ๋ก groupby ํ์ ๋ ๊ฐ ์ฑ๋ณ์ ๋ฐ๋ฅธ ์ ์  ์ธ์ ์๋ฅผ ํ์ธํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ ๊ณผ์ ์์ ์ฌ๋ฌ ๋ฌธ์ ๊ฐ ์์๋๋ฐ ๊ตฌ๊ธ๋ง์ ํตํด ์ฌ๋ฌ ๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ๋ฉด์ ๋ฌธ์ ๋ฅผ ํ๋์ฉ ํด๊ฒฐํด๋๊ฐ์ต๋๋ค. |
| ์ด๋ฌด์ด | - ๋ชจ๋ธ๋ง / USER CRUD, ํต๊ณ๋ชจ๋ธ๋ง ๋ฐ ๊ตฌํ, validator ๊ตฌํ<br> - testcase ์์ฑ, user swagger ์์ฑ / ์ฝ๋ ๋ฆฌํฉํ ๋ง <br> - ๊นํ๋ธ repository ์์ฑ ๋ฐ ์ค์  | ๋ก์ปฌ ๋ธ๋์น์์ ์ ์  ํ์๊ฐ์ API ๊ธฐ๋ฅ ๊ตฌํ ์๋ฃ ํ develop ๋ธ๋์น์ PR์ ์์ฒญํ๋๋ฐ, ์ถฉ๋์ด ๋ฐ์ํ์ต๋๋ค. ๊ทธ๋์ ํผ์์ ํ๋ก์ ํธ๋ฅผ ์งํํด์ค๋ค ๋ณด๋ ์ถฉ๋์ ํผํ๋ฉด์ ๊ฐ๋ฐ์ ์งํ์ ํด์์ ์ถฉ๋ ์ด์์ ์ ๋๋ก ๋์ฒํ์ง ๋ชปํ๊ณ  ์์๋๋ฐ ์์ฐฌ๋, ๊ฒฝ์๋์ ๋์์ผ๋ก ์ถฉ๋ ํด๊ฒฐํ  ์ ์์์ต๋๋ค. |
| ์กฐ๊ฒฝ์ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|- ๋ชจ๋ธ๋ง / ๊ณต์ง์ฌํญ CRUD, login, category CRUD ๊ตฌํ <br>- ๋ก๊ทธ์ธ ๊ฒ์ฆ, ๊ด๋ฆฌ์ ๋ฑ๊ธ ๊ฒ์ฆ, ์๋ฌ ๋ฏธ๋ค์จ์ด ๊ตฌํ <br>- ESLint, prettier ์ค์  / ์ฝ๋ ๋ฆฌํฉํ ๋ง / noticeBoard, operateBoard swagger ์์ฑ <br>- README, ๋ธ์ ํ์๋ก ์์ฑ | postman์ผ๋ก ์์ฒญ์ ๋ณด๋ด์ CRUD ๊ธฐ๋ฅ ๊ตฌํ์ ํ์ธํ๊ธฐ ์ํด์ ํ์๊ฐ์์ ํ์๋๋ฐ DB์ ๋ฐ์ดํฐ๊ฐ ๋ค์ด๊ฐ์ง ์์์ต๋๋ค. ๊ธฐ์กด id์ uuid๋ก ์ ์ฉํ๊ณ  DB๋ฅผ ์ฌ์์ฑํ์ง ์์์ ๋ฐ์ํ ๋ฌธ์ ์์ต๋๋ค. ๋ฌด์ด๋์ ๋์์ผ๋ก app.js์์ sequelize ์์ฑ ์ค force๋ฅผ true๋ก ๋๊ณ  ์๋ฒ ์ฌ๊ตฌ๋์ ํ๋ DB๊ฐ ์ฌ์์ฑ๋๋ฉด์ ๋ณ๊ฒฝ์ฌํญ์ด ์ ์ฉ๋์ด ํด๊ฒฐํ์ต๋๋ค. |
