import { Model } from "mongoose";
import { BookDocument } from "./schemas/book.schema";
import { CreateBookDto } from "./dto/create-book.dto";
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(createBookDto: CreateBookDto): Promise<BookDocument>;
    findAll(): Promise<BookDocument[]>;
    findById(id: any): Promise<BookDocument>;
    updateById(_id: any, newProfile: any): Promise<any>;
    deleteById(_id: any): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
