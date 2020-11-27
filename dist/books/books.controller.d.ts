import { Book } from "./schemas/book.schema";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<{
        url: string;
    }>;
    forCreate(): Promise<void>;
    forUpdate(id: string): Promise<{
        _id: string;
    }>;
    findAll(limit: number, start: number): Promise<{
        data: Book[];
    }>;
    findById(id: string): Promise<{
        data: Book;
    }>;
    updateById(id: string, updateBookDto: UpdateBookDto): Promise<{
        url: string;
    }>;
    deleteById(id: string): Promise<{
        url: string;
    }>;
}
