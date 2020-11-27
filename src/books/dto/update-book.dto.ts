import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  pages: number;
}
