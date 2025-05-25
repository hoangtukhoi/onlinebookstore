//Authentication account
const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = class API {
  //Register Account
  static async registerAccount(req, res) {
    const userData = await UserModel.findOne({
      email: req.body.email,
    });

    if (userData) {
      return res.status(401).json("Đã tồn tại tài khoản!");
    }

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET
      ).toString(),
      phonenumber: req.body.phonenumber,
      isAdmin: req.body.isAdmin || false, // Cho phép chỉ định isAdmin khi đăng ký (nếu cần)
    });

    try {
      const createNewUser = await newUser.save();
      res.status(201).json(createNewUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Đăng nhập tài khoản
  static async loginAccount(req, res) {
    try {
      const userData = await UserModel.findOne({
        email: req.body.email,
      });

      if (!userData) {
        return res.status(401).json("Sai tài khoản Email!");
      }

      const hashedPassword = CryptoJS.AES.decrypt(
        userData.password,
        process.env.PASS_SECRET
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      if (originalPassword !== req.body.password) {
        return res.status(401).json("Sai mật khẩu");
      }

      // Tạo JWT
      const accessToken = jwt.sign(
        {
          id: userData._id,
          isAdmin: userData.isAdmin,
        },
        process.env.JWT_SECRET, // Đảm bảo biến môi trường JWT_SECRET được thiết lập
        { expiresIn: "3d" } // Token hết hạn sau 3 ngày
      );
      console.log("Login success. Token:", accessToken);
      // Loại bỏ password khỏi response
      const { password, ...others } = userData._doc;

      res.status(200).json({ ...others, accessToken });
    } catch (err) {
      res.status(501).json(err);
    }
  }
};
  