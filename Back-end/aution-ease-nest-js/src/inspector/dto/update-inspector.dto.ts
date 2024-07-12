import { IsOptional, IsString } from 'class-validator';

export class UpdateInspectorDTO {
  @IsOptional()
  @IsString()
  liscense: string;
}
