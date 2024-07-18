import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class RequestDTO {
  @ApiProperty({
    name: 'requestID',
    type: Number,
    description: 'The id of the request',
  })
  @IsNotEmpty()
  @IsNumber()
  requestID: number;

  @ApiProperty({
    name: 'nameRequest',
    type: String,
    description: 'The name of the request',
  })
  @IsNotEmpty()
  @IsString()
  nameRequest: string;

  @ApiProperty({
    name: 'descriptionRequest',
    type: String,
    description: 'The description of the request',
  })
  @IsOptional()
  @IsString()
  descriptionRequest: string;

  @ApiProperty({
    name: 'verified',
    type: Boolean,
    description: 'The verified state of the request',
  })
  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  @ApiProperty({
    name: 'requestStatus',
    type: Boolean,
    description: 'The status of the request',
  })
  @IsNotEmpty()
  @IsBoolean()
  requestStatus: boolean;

  @ApiProperty({
    name: 'detailInspectorID',
    type: Number,
    description: 'The id of the detail inspector',
  })
  @IsNotEmpty()
  @IsNumber()
  detailInspectorID: number;

  @ApiProperty({
    name: 'userID',
    type: String,
    description: 'The id of the user',
  })
  @IsNotEmpty()
  @IsString()
  userID: string;

  @ApiProperty({
    name: 'assetID',
    type: Number,
    description: 'The id of the asset',
  })
  @IsNotEmpty()
  @IsNumber()
  assetID: number;

  @ApiProperty({
    name: 'delflag',
    type: Boolean,
    description: 'The delflag of the request',
  })
  @IsNotEmpty()
  @IsBoolean()
  delflag: boolean;
}
