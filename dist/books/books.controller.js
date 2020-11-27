"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const swagger_1 = require("@nestjs/swagger");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    async create(createBookDto) {
        await this.booksService.create(createBookDto);
        return { url: "http://localhost:3000/api/books/" };
    }
    async forCreate() {
        return;
    }
    async forUpdate(id) {
        return { _id: id };
    }
    async findAll(limit, start) {
        const books = await this.booksService.findAll();
        const pos = start > 0 ? start - 1 : 0;
        if (limit > 0)
            return { data: books.slice(pos, pos + limit) };
        else
            return { data: books.slice(pos) };
    }
    async findById(id) {
        const book = await this.booksService.findById(id);
        return { data: book };
    }
    async updateById(id, updateBookDto) {
        await this.booksService.updateById(id, updateBookDto);
        return { url: "http://localhost:3000/api/books/" };
    }
    async deleteById(id) {
        await this.booksService.deleteById(id);
        return { url: "http://localhost:3000/api/books/" };
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiProperty({ type: [create_book_dto_1.CreateBookDto] }),
    swagger_1.ApiResponse({
        status: 302,
        description: "add new book, redirect: /api/books/",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Redirect("http://localhost:3000/api/books/", 302),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
__decorate([
    common_1.Get("create"),
    swagger_1.ApiResponse({
        status: 200,
        description: "Render for update",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Render("create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "forCreate", null);
__decorate([
    common_1.Get("update/:id"),
    swagger_1.ApiParam({
        name: "id",
        description: "id book",
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: "Render for update",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Render("update"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "forUpdate", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiQuery({ name: "limit", description: "limit - number of books" }),
    swagger_1.ApiQuery({ name: "start", description: "start - last added books" }),
    swagger_1.ApiResponse({
        status: 200,
        description: "Get all books",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Render("index"),
    __param(0, common_1.Query("limit", new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __param(1, common_1.Query("start", new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    swagger_1.ApiParam({
        name: "id",
        description: "id book",
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: "Find book",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "findById", null);
__decorate([
    common_1.Put(":id"),
    swagger_1.ApiParam({
        name: "id",
        description: "id book",
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: "Update book",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Redirect("http://localhost:3000/api/books/", 302),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "updateById", null);
__decorate([
    common_1.Delete(":id"),
    swagger_1.ApiParam({
        name: "id",
        description: "id book",
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: "Delete book",
    }),
    swagger_1.ApiResponse({
        status: 404,
        description: "Not found",
    }),
    common_1.Redirect("http://localhost:3000/api/books/", 302),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "deleteById", null);
BooksController = __decorate([
    swagger_1.ApiTags("books"),
    common_1.Controller("api/books"),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map