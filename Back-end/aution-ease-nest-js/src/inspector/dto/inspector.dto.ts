import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InspectorDTO {
  @ApiProperty({
    name: 'inspectorID',
    type: Number,
    description: 'The id of the inspector',
  })
  @IsNotEmpty()
  @IsNumber()
  inspectorID: number;

  @ApiProperty({
    name: 'liscense',
    type: String,
    description: 'The license of the inspector',
  })
  @IsNotEmpty()
  @IsString()
  liscense: string;
}
