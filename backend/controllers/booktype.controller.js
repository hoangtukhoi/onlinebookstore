const BookTypeModel = require("../models/BookType");

module.exports = class API {
  //Create Author
  static async createBookType(req, res) {
    const bookTypeInput = new BookTypeModel({
        booktype_name: req.body.booktype_name,
        category_name: req.body.category_name
    });
    try {
      const createNewBookType = await bookTypeInput.save();
      res.status(200).json(createNewBookType);
    } catch (err) {
      console.log(err)
      res.status(501).json(err);
    }
  }

  //Update Category
  static async updateBookType(req, res) {
    const id_booktype = req.params.id;
    try {
      const updateBookType = await BookTypeModel.findByIdAndUpdate(
        id_booktype,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateBookType);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Delete Category
  static async deleteBookType(req, res) {
    const id_booktype = req.params.id;
    try {
      await BookTypeModel.findByIdAndDelete(id_booktype);
      res.status(200).json("Đã xóa thành công thể loại sách!");
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get Category With id
  static async getbooktypewithID(req, res) {
    try {
      const result = await BookTypeModel.findOne({ _id: req.params.id });
      res.status(201).json(result);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Find Category with name
  static async findbooktypewithName(req, res) {
    try {
      const name_booktype = await req.params.namebooktype;
      const BookTypeData = await BookTypeModel.find({
        booktype_name: { $regex: `${name_booktype}`, $options: "i" },
      });

      res.status(201).json(BookTypeData);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get All Category
  static async getAllBookType(req, res) {
    try {
      const arrayBookType = await BookTypeModel.find();
      res.status(200).json(arrayBookType);
    } catch (err) {
      res.status(501).json(err);
    }
  }
};
