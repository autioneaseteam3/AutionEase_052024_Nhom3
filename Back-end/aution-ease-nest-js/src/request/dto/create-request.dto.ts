import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRequestDTO {
  @IsNotEmpty()
  @IsString()
  nameRequest: string;

  @IsOptional()
  @IsString()
  descriptionRequest: string;

  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  @IsNotEmpty()
  @IsBoolean()
  requestStatus: boolean;

  @IsNotEmpty()
  @IsNumber()
  detailInspectorID: number;

  @IsNotEmpty()
  @IsString()
  userID: string;

  @IsNotEmpty()
  @IsNumber()
  assetID: number;

  @IsNotEmpty()
  @IsBoolean()
  delflag: boolean;
}
