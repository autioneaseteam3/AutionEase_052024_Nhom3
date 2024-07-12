import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDetailInspectorDTO {
  @IsOptional()
  @IsNumber()
  inspectorID: number;

  @IsOptional()
  @IsString()
  userID: string;
}
