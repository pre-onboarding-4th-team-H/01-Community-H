const Category = require("../database/models/category");
const { v4: uuidv4 } = require("uuid");

// 카테고리 생성
const createCategory = async (name) => {
  const category = await Category.create({ id: uuidv4(), name });
  return category;
};

// 카테고리 전체 조회
const findCategorys = async () => {
  const categorys = await Category.findAll({});
  return categorys;
};

// 카테고리 조회
const findCategory = async (id) => {
  const category = await Category.findOne({ where: { id } });
  return category;
};

// 카테고리 수정
const updateCategory = async (id, name) => {
  const category = await Category.update({ name }, { where: { id } });
  return category;
};

// 카테고리 삭제
const destroyCategory = async (id) => {
  const category = await Category.destroy({ where: { id } });
  return category;
};

module.exports = {
  createCategory,
  findCategorys,
  findCategory,
  destroyCategory,
  updateCategory,
};
