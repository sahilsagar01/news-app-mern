const router = require("express").Router();
const {
  registerUser,
  getAllUsers,
  updateOne,
  loginUser,
} = require("../controller/users_controler");

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.patch("/patch/:id", updateOne);
router.post("/login", loginUser);
// router.put("/login", loginUser);
module.exports = router;
