const User = require("../modules/users_module");

const registerUser = async (req, res) => {
  const details = req.body;
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    interest: [req.body.interest],
  });
  newUser
    .save()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getAllUsers = async (req, res) => {
  const users = await User.find()
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.json("email and password required.");
    const doc = await User.findOne({ email, password });
    return res.json(doc);
  } catch (err) {
    res.send(err);
  }
};

const updateOne = async (req, res) => {
  const users = await User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  )
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email, password });
//   if (user) {
//     res.status(200).json(user);
//   } else {
//     res.status(400).json(false);
//   }
// };

module.exports = { registerUser, getAllUsers, updateOne, loginUser };
