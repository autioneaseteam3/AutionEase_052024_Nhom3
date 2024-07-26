import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInspectorDTO {
  @ApiProperty({
    name: 'liscense',
    type: String,
    description: 'The license of the inspector',
    example: 'License',
  })
  @IsNotEmpty()
  @IsString()
  liscense: string;
}
