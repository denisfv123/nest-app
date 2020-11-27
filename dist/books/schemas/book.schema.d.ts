import { Document } from "mongoose";
export declare type BookDocument = Book & Document;
export declare class Book {
    name: string;
    pages: number;
}
export declare const BookSchema: import("mongoose").Schema<any>;
