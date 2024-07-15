import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDetailInspectorDTO {
  @ApiProperty({
    name: 'inspectorID',
    type: Number,
    description: 'The id of inspector',
    example: 123,
  })
  @IsOptional()
  @IsNumber()
  inspectorID: number;

  @ApiProperty({
    name: 'inspectorID',
    type: Number,
    description: 'The id of inspector',
    example: 123,
  })
  @IsOptional()
  @IsString()
  userID: string;
}
