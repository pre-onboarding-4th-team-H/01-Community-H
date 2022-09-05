const { Router } = require("express");
const { categoryService } = require("../services");
const adminRequired = require("../middlewares/adminRequired");
const loginRequired = require("../middlewares/loginRequired");
const {
  passwordValidator,
} = require("../middlewares/validator/passwordValidator");

const router = Router();

router.post("/", loginRequired, adminRequired, categoryService.addCategory);
router.get("/:id", categoryService.getCategory);
router.get("/", categoryService.getCategorys);
router.patch("/:id", loginRequired, adminRequired, categoryService.setCategory);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  passwordValidator(),
  categoryService.deleteCategory
);

module.exports = router;
