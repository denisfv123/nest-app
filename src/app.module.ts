import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { BooksController } from "./books/books.controller";
import { BooksModule } from "./books/books.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/books"), BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(BooksController);
  }
}
