const freeBoardRepos = require("../repos/freeBoard");
const getPostAll = async (req, res, next) => {
  try {
    const posts = await freeBoardRepos.getPostAll();
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getPostDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const PostDetail = await freeBoardRepos.getPostDetail(id);
    return res.status(200).json(PostDetail);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id, categoryId, title, content } = req.body;
    console.log(title, categoryId, 345345);
    const existingPost = await freeBoardRepos.checkDeletedPost(id);
    if (!existingPost) {
      return res.status(400).json({ message: "이미 삭제된 공고입니다." });
    }
    const updatedPost = await freeBoardRepos.updatePost(
      id,
      categoryId,
      title,
      content
    );
    console.log(updatedPost[0], 000);
    if (updatedPost[0] === 1) {
      return res.status(400).json({ message: "내용이 변경되지 않았습니다." });
    }
    return res.status(200).json({ message: "Posting is updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPost = await freeBoardRepos.deletePost(id);
    if (!deletedPost) {
      return res.status(400).json({ message: "이미 삭제된 공고입니다." });
    }
    return res.status(200).json({ message: "Posting is deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPostAll, getPostDetail, updatePost, deletePost };
