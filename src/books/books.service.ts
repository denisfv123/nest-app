import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookDocument } from "./schemas/book.schema";
import { CreateBookDto } from "./dto/create-book.dto";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto) {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async findById(id) {
    return this.bookModel.findById(id).exec();
  }

  async updateById(_id, newProfile) {
    return this.bookModel.updateOne({ _id }, newProfile).exec();
  }

  async deleteById(_id) {
    return this.bookModel.deleteOne({ _id }).exec();
  }
}
