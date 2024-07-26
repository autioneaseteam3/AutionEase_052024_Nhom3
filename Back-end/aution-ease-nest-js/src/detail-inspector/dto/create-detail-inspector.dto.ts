import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDetailInspectorDTO {
  @ApiProperty({
    name: 'inspectorID',
    type: Number,
    description: 'The id of inspector',
    example: 123,
  })
  @IsNotEmpty()
  @IsNumber()
  inspectorID: number;

  @ApiProperty({
    name: 'userID',
    type: Number,
    description: 'The id of user',
    example: 123,
  })
  @IsNotEmpty()
  @IsString()
  userID: string;
}
