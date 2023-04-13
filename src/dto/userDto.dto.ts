import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  address: string;
}
