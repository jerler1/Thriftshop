const login = (req, res) => {
  const { email, password } = req.body;
  // do stuff with db;
  console.log(`Received email: '${email}' and password: '${password}'.`);
  const user = {
    username: "Test User",
  };
  res.json({
    user,
  });
};

module.exports = login;
