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

const logout = (req, res) => {
  // destroy the session 
  res.status(200).send();
}

module.exports = {
  login,
  logout,
};
