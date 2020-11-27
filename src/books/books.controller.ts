import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Redirect,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Put,
  Delete,
} from "@nestjs/common";
import { Book } from "./schemas/book.schema";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import {
  ApiProperty,
  ApiQuery,
  ApiTags,
  ApiResponse,
  ApiParam,
} from "@nestjs/swagger";

@ApiTags("books")
@Controller("api/books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiProperty({ type: [CreateBookDto] })
  @ApiResponse({
    status: 302,
    description: "add new book, redirect: /api/books/",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Redirect("http://localhost:3000/api/books/", 302)
  async create(@Body() createBookDto: CreateBookDto) {
    await this.booksService.create(createBookDto);
    return { url: "http://localhost:3000/api/books/" };
  }

  @Get("create")
  @ApiResponse({
    status: 200,
    description: "Render for update",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Render("create")
  async forCreate() {
    return;
  }

  @Get("update/:id")
  @ApiParam({
    name: "id",
    description: "id book",
  })
  @ApiResponse({
    status: 200,
    description: "Render for update",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Render("update")
  async forUpdate(@Param("id") id: string) {
    return { _id: id };
  }

  @Get()
  @ApiQuery({ name: "limit", description: "limit - number of books" })
  @ApiQuery({ name: "start", description: "start - last added books" })
  @ApiResponse({
    status: 200,
    description: "Get all books",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Render("index")
  async findAll(
    @Query("limit", new DefaultValuePipe(0), ParseIntPipe) limit: number,
    @Query("start", new DefaultValuePipe(0), ParseIntPipe) start: number
  ) {
    const books: Book[] = await this.booksService.findAll();
    const pos = start > 0 ? start - 1 : 0;
    if (limit > 0) return { data: books.slice(pos, pos + limit) };
    else return { data: books.slice(pos) };
  }

  @Get(":id")
  @ApiParam({
    name: "id",
    description: "id book",
  })
  @ApiResponse({
    status: 200,
    description: "Find book",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  async findById(@Param("id") id: string) {
    const book: Book = await this.booksService.findById(id);
    return { data: book };
  }

  @Put(":id")
  @ApiParam({
    name: "id",
    description: "id book",
  })
  @ApiResponse({
    status: 200,
    description: "Update book",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Redirect("http://localhost:3000/api/books/", 302)
  async updateById(
    @Param("id") id: string,
    @Body() updateBookDto: UpdateBookDto
  ) {
    await this.booksService.updateById(id, updateBookDto);
    return { url: "http://localhost:3000/api/books/" };
  }

  @Delete(":id")
  @ApiParam({
    name: "id",
    description: "id book",
  })
  @ApiResponse({
    status: 200,
    description: "Delete book",
  })
  @ApiResponse({
    status: 404,
    description: "Not found",
  })
  @Redirect("http://localhost:3000/api/books/", 302)
  async deleteById(@Param("id") id: string) {
    await this.booksService.deleteById(id);
    return { url: "http://localhost:3000/api/books/" };
  }
}
