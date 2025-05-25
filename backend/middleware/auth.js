// middleware/auth.js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; // Giả sử token được gửi dưới dạng "Bearer <token>"

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token không hợp lệ!");
      }
      req.user = user; // Gắn thông tin user vào request
      next();
    });
  } else {
    return res.status(401).json("Bạn chưa đăng nhập!");
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log("User info:", req.user);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Bạn không có quyền truy cập!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAdmin };