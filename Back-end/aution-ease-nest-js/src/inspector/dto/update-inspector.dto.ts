import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateInspectorDTO {
  @ApiProperty({
    name: 'liscense',
    type: String,
    description: 'The license of the inspector',
    example: 'License',
  })
  @IsOptional()
  @IsString()
  liscense: string;
}
