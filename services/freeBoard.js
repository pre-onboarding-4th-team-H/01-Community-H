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

module.exports = { getPostAll, getPostDetail };
