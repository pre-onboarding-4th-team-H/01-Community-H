# 🔗목차
[Community Service](#-community-service)

[요구사항 분석](#-요구사항-분석)

[역할분담 및 트러블 슈팅](#-역할분담-및-트러블-슈팅)

[개발 타임라인](#-개발-타임라인)

[API 문서](#-api-문서)

[기술 스택](#-기술-스택)

[테스트 케이스](#-테스트-케이스)

[ERD](#-erd)

[폴더 구조](#-폴더-구조)

[컨벤션](#-컨벤션)

[패키지](#-패키지)

# 🚩 Community Service

**회원 등급제를 통한 게시판 접근 제한과 사용자 이용 통계 데이터를 볼 수 있는 커뮤니티 서비스입니다.**

### ✔ 기능 설명

- 회원 가입, 수정, 탈퇴, 로그인이 가능합니다.
- 게시판 종류는 공지사항, 운영게시판, 자유게시판이 있습니다.
- 회원 등급에 따라 게시판 기능 제한이 있습니다.
- 성별, 나이, 접속 시간에 따른 통계 데이터 조회가 가능합니다.

# ✅ 요구사항 분석

### ✔ 게시판
- ~~자유게시판의 경우 다양성을 위해 카테고리를 추가했습니다.~~
- 회원 등급에 따른 게시판 기능 제한을 위해 관리자 등급 확인 미들웨어를 구현했습니다.
- 모든 게시판은 로그인한 유저만 이용할 수 있도록 로그인 확인 미들웨어를 구현했습니다.
- 게시판 글 수정, 삭제 시 글 작성자를 판별하도록 DB에 입력된 해당 게시글의 userId와 토큰의 userId의 일치 여부를 구현했습니다.
- 게시판 수정, 삭제의 경우, 더블체크로 비밀번호를 입력하도록 구현했습니다.
- 게시판 생성, 수정, 삭제 시 입력 데이터를 검증하는 validator를 추가했습니다.
    
    
    | 접근 권한 | 관리자 | 일반 유저 |
    | --- | --- | --- |
    | 공지사항 | CRUD | R |
    | 운영 게시판 | CRUD  | 접근 불가 |
    | 자유 게시판 | CRUD  | CRUD  |

### ✔ 회원 API 개발

- 회원가입, 로그인 기능 구현을 위해 회원테이블에 이메일, 비밀번호 필드를 추가했습니다.
- 마지막 접속 시간을 측정하기 위해 회원테이블에 lastLog 필드를 추가했습니다.
- 회원가입 시 입력 데이터 검증을 위해 validator를 구현했습니다.
- 회원 수정, 탈퇴의 경우, 더블체크로 비밀번호를 입력하도록 구현했습니다.
- 게시판 기능 제한을 위한 회원 등급을 관리자(0)와 일반 유저(1)로 구분했습니다.

### ✔ 이용 통계 집계

- 성별 / 나이 / 접속 시간별로 통계 분석을 하도록 구현했습니다.
- 접속 시간의 경우, 로그인 이후에도 유저가 계속 활동을 할 수 있기 때문에 loginRequired에 lastLog를 업데이트하는 쿼리를 넣어 마지막 접속 시간을 알 수 있게 구현했습니다.

# 개발 타임라인

08.31

# API 문서
localhost/8080/api-docs

# 기술 스택
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-FCC624?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-61DAFB?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Mocha-F8DC75?style=for-the-badge&logo=Mocha&logoColor=white">

# ERD
![Untitled](https://user-images.githubusercontent.com/80232260/188364873-66642971-d272-4fac-bdfd-a6fa8d2815b7.png)


# 📜 테스트 케이스

- unitTest는 mocha와 supertest로 진행했습니다.

실행결과 캡쳐

# 🗂 폴더 구조

```bash

├── database
│   ├── models
					  ├── user.js
│   └── config.js
├── repos
│   └── index.js
		└── user.js
├── node_modules
├── package-lock.json
├── package.json
│   
├── routes
│   └── index.js
├── app.js
└── services
    └── index.js
```

# 💡 컨벤션

### ✔ camelCase / PascalCase

- **파일, 생성자, 변수, 메서드명**은 **camelCase**를 사용합니다.
- **클래스명**은 **PascalCase**를 사용합니다.

### ✔ Lint 규칙

| 들여쓰기 2칸 | 탭 사용 x |
| --- | --- |
| double quote 사용. | commonJS 사용 |
| 마지막 콤마 사용 | 한줄 최대 글자수: 80 |
| var는 사용하지 않습니다. | 세미 콜론 사용을 허용합니다. |

### ✔ 메서드명 규칙

- 전체조회는 복수형으로 작성합니다.

| 요청 내용  | service | example | repo | example |
| --- | --- | --- | --- | --- |
| 생성 | add | addPost | create | createPost |
| 조회 | get | getPost | find요청객체 | findPost |
| 전체조회 | get | getPosts | find요청객체s | findPosts |
| 수정 | set | setPost | update | updatePost |
| 삭제 | delete | deletePost | destroy | destroyPost |

### ✔ 주석

- 메서드 및 코드 설명 간단하게 작성

### ✔ Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[참고 사이트](https://overcome-the-limits.tistory.com/entry/협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기)

# ⚙ 패키지

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

# ✋ 역할분담 및 트러블 슈팅

|  | 담당 역할 | 이슈 / 해결과정 |
| --- | --- | --- |
| 김예찬 | - 모델링 / 자유게시판 CRUD, 통계 구현 <br> - swagger 설정, freeBoard swagger 작성 | 어떤 문제, 어떤 식으로 해결하려고 했고, 어떤 이슈가 있었으며, 어떤 절차로 해결 하였는지 |
| 이무열 | - 모델링 / USER CRUD, 통계모델링 및 구현, validator 구현<br> - testcase 작성, user swagger 작성 / 코드 리팩토링 <br> - 깃허브 repository 생성 및 설정 |  |
| 조경서 | - 모델링 / 공지사항 CRUD, login 구현 <br> - 로그인 검증, 관리자 등급 검증, 에러 미들웨어 구현 <br> - ESLint, prettier 설정 / 코드 리팩토링 / noticeBoard swagger 작성 / README, 노션 회의록 작성 |  |
| 이태권 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| - 모델링 / 운영 게시판 CRUD 구현 <br> - express 초기 설정, 깃허브 orgainzation 생성  |  |
