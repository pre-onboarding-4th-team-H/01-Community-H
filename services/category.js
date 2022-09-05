const { categoryRepo } = require("../repos");
const bcrypt = require("bcrypt");

// 카테고리 생성
const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await categoryRepo.createCategory(name);

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

// 카테고리 전체 조회
const getCategorys = async (req, res, next) => {
  try {
    const categorys = await categoryRepo.findCategorys();

    // 카테고리가 없는 경우
    if (categorys.length === 0) {
      throw new Error("조회할 카테고리가 없습니다.");
    }
    res.status(200).json(categorys);
  } catch (err) {
    next(err);
  }
};

// 카테고리 조회
const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await categoryRepo.findCategory(id);

    // 카테고리가 없는 경우
    if (!category) {
      throw new Error("조회할 카테고리가 없습니다.");
    }
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

// 카테고리 수정
const setCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // 해당 카테고리가 있는지 확인
    let category = await categoryRepo.findCategory(id);
    if (!category) {
      throw new Error("카테고리가 존재하지 않습니다.");
    }

    const result = await categoryRepo.updateCategory(id, name);

    // 수정되지 않은 경우
    if (result[0] === 0) {
      throw new Error("카테고리가 수정되지 않았습니다.");
    }

    // 프론트가 있다는 가정 하에 수정된 category 객체를 보냄
    category = await categoryRepo.findCategory(id);

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

// 카테고리 삭제
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // 해당 카테고리가 있는지 확인
    const category = await categoryRepo.findCategory(id);
    if (!category) {
      throw new Error("카테고리가 존재하지 않습니다.");
    }

    // 비밀번호로 더블체크
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);
    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const result = await categoryRepo.destroyCategory(id);

    if (result[0] === 0) {
      throw new Error("카테고리가 삭제되지 않았습니다.");
    }

    res.status(200).json({ message: `${id} 카테고리가 삭제되었습니다.` });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCategory,
  getCategorys,
  getCategory,
  setCategory,
  deleteCategory,
};
