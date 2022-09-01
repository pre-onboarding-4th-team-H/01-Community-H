const noticeRepos = require("../repos/notice");

// 게시글 생성
const addPost = async (req, res, next) => {
  try {
    const { title, content, UserId } = req.body;

    // 빈 값을 받은 경우
    if (!(title && content && UserId)) {
      throw new Error("값을 입력해주세요.");
    }

    //제목 100자
    if (title.length >= 100) {
      throw new Error("제목 수를 100자 이하로 입력하세요.");
    }

    // 내용 1000자 제한
    if (content.length >= 1000) {
      throw new Error("게시글의 글자수를 1000자 이하로 입력하세요.");
    }

    // 게시글 생성
    const post = await noticeRepos.createPost(title, content, UserId);

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 전체 조회
const getPosts = async (req, res, next) => {
  try {
    const posts = await noticeRepos.findPosts();

    // 게시글이 없는 경우
    if (posts.length === 0) {
      throw new Error("조회할 게시글이 없습니다.");
    }

    res.status(201).json(posts);
  } catch (err) {
    next(err);
  }
};

// 게시글 조회
const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await noticeRepos.findPost(id);

    // 게시글이 없는 경우
    if (!post) {
      throw new Error("조회할 게시글이 없습니다.");
    }

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// 게시글 수정
const setPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, password } = req.body;

    // 제목, 내용 입력 확인
    if (!(title && content)) {
      throw new Error("제목과 내용을 입력하세요.");
    }

    // 비밀번호 입력 확인
    if (!password) {
      throw new Error("비밀번호를 입력하세요.");
    }

    // 해당 게시글이 있는지 확인
    const isPost = await noticeRepos.findPost(id);
    if (!isPost) {
      throw new Error("게시글이 존재하지 않습니다.");
    }

    // 회원 비밀번호(임시로 adminRequired에서 req.pass에 넣음)와 일치하는지 확인
    const userPassword = req.pass;

    // 유저 비밀번호가 해쉬화되지 않았기 때문에 임시로 조건문 사용
    // const isPasswordCorrect = await bcryt.compare(password, userPassword);
    if (userPassword !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await noticeRepos.updatePost(id, title, content);

    // 수정되지 않은 경우
    if (result[0] === 0) {
      throw new Error("게시글이 수정되지 않았습니다.");
    }

    res.status(201).json({ message: `${id} 게시글이 수정되었습니다.` });
  } catch (err) {
    next(err);
  }
};

// 게시글 삭제
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // 해당 게시글이 있는지 확인
    const isPost = await noticeRepos.findPost(id);
    if (!isPost) {
      throw new Error("게시글이 존재하지 않습니다.");
    }
    // 회원 비밀번호(임시로 adminRequired에서 req.pass에 넣음)와 일치하는지 확인
    const userPassword = req.pass;

    // 유저 비밀번호가 해쉬화되지 않았기 때문에 임시로 조건문 사용
    // const isPasswordCorrect = await bcryt.compare(password, userPassword);
    if (userPassword !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await noticeRepos.destroyPost(id);

    if (result[0] === 0) {
      throw new Error("게시글이 삭제되지 않았습니다.");
    }

    res.status(201).json({ message: `${id} 게시글이 삭제되었습니다.` });
  } catch (err) {
    next(err);
  }
};

module.exports = { addPost, getPosts, getPost, setPost, deletePost };