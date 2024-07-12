import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRequestDTO {
  @IsOptional()
  @IsString()
  nameRequest: string;

  @IsOptional()
  @IsString()
  descriptionRequest: string;

  @IsOptional()
  @IsBoolean()
  verified: boolean;

  @IsOptional()
  @IsBoolean()
  requestStatus: boolean;

  @IsOptional()
  @IsNumber()
  detailInspectorID: number;

  @IsOptional()
  @IsString()
  userID: string;

  @IsOptional()
  @IsNumber()
  assetID: number;

  @IsOptional()
  @IsBoolean()
  delflag: boolean;
}
