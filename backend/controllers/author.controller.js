const AuthorModel = require("../models/Author");

module.exports = class API {
  //Create Author
  static async createAuthor(req, res) {
    const authorInput = new AuthorModel({
        author_name: req.body.author_name,
    });
    try {
      const createNewAuthor = await authorInput.save();
      res.status(200).json(createNewAuthor);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Update Category
  static async updateAuthor(req, res) {
    const id_author = req.params.id;
    try {
      const updateAuthor = await AuthorModel.findByIdAndUpdate(
        id_author,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateAuthor);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Delete Category
  static async deleteAuthor(req, res) {
    const id_author = req.params.id;
    try {
      await AuthorModel.findByIdAndDelete(id_author);
      res.status(200).json("Tác gỉa đã xóa thành công!");
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get Category With id
  static async getauthortwithID(req, res) {
    try {
      const result = await AuthorModel.findOne({ _id: req.params.id });
      res.status(201).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Find Category with name
  static async findauthorwithName(req, res) {
    try {
      const name_author = await req.params.nameauthor;
      const AuthorData = await AuthorModel.find({
        author_name: { $regex: `${name_author}`, $options: "i" },
      });

      res.status(201).json(AuthorData);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get All Category
  static async getAllAuthor(req, res) {
    try {
      const arrayAuthor = await AuthorModel.find();
      res.status(200).json(arrayAuthor);
    } catch (err) {
      res.status(501).json(err);
    }
  }
};
