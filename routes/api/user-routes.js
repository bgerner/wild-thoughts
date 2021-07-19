const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

const router = require("express").Router();

router
.route('/')
.get(getAllUser)
.post(addUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/:friendId')
.put(addFriend)
.delete(deleteFriend)


module.exports = router;
