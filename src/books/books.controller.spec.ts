import { Test } from "@nestjs/testing";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";
import { Book } from "./interfaces/book.interface";

describe("BooksController", () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksService = moduleRef.get<BooksService>(BooksService);
    booksController = moduleRef.get<BooksController>(BooksController);
  });

  describe("findAll", () => {
    it("should return an array of books", async () => {
      const result: Book[] = [{ name: "book111", pages: 111 }];
      jest
        .spyOn(booksService, "findAll")
        .mockImplementation(async () => await result);

      expect(await booksController.findAll(0, 0)).toBe(result);
    });
  });
});
