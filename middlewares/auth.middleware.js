exports.authBearer = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  const token = auth.split(" ")[1];

  if (token !== "12345TOKENRAHASIA") {
    return res.status(403).json({ message: "Token tidak valid" });
  }

  next();
};
