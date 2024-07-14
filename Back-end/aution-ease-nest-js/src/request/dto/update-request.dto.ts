import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRequestDTO {
  @ApiProperty({
    name: 'nameRequest',
    type: String,
    description: 'The name of the request',
    example: 'Test Request',
  })
  @IsOptional()
  @IsString()
  nameRequest: string;

  @ApiProperty({
    name: 'descriptionRequest',
    type: String,
    description: 'The description of the request',
    example: 'Test Request description',
  })
  @IsOptional()
  @IsString()
  descriptionRequest: string;

  @ApiProperty({
    name: 'verified',
    type: Boolean,
    description: 'The verified state of the request',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  verified: boolean;

  @ApiProperty({
    name: 'requestStatus',
    type: Boolean,
    description: 'The status of the request',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  requestStatus: boolean;

  @ApiProperty({
    name: 'detailInspectorID',
    type: Number,
    description: 'The id of the detail inspector',
    example: 123,
  })
  @IsOptional()
  @IsNumber()
  detailInspectorID: number;

  @ApiProperty({
    name: 'detailInspectorID',
    type: String,
    description: 'The id of the user',
    example: '123',
  })
  @IsOptional()
  @IsString()
  userID: string;

  @ApiProperty({
    name: 'assetID',
    type: Number,
    description: 'The id of the asset',
    example: 123,
  })
  @IsOptional()
  @IsNumber()
  assetID: number;

  @ApiProperty({
    name: 'delflag',
    type: Boolean,
    description: 'The delflag of the request',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  delflag: boolean;
}
