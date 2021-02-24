const login = (req, res) => {
  const { email, password } = req.body;
  // do stuff with db;
  console.log(`Received email: '${email}' and password: '${password}'.`);
  res.json({ status: "ok" });
};

module.exports = login;
