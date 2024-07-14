import { ApiProperty } from '@nestjs/swagger';
import { DetailInspectors } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DetailInspectorDTO implements DetailInspectors {
  @ApiProperty({
    name: 'detailInspectorID',
    type: Number,
    description: 'The id of detail inspector',
  })
  detailInspectorID: number;

  @ApiProperty({
    name: 'inspectorID',
    type: Number,
    description: 'The id of inspector',
  })
  @IsNotEmpty()
  @IsNumber()
  inspectorID: number;

  @ApiProperty({
    name: 'userID',
    type: Number,
    description: 'The id of user',
  })
  @IsNotEmpty()
  @IsString()
  userID: string;
}
