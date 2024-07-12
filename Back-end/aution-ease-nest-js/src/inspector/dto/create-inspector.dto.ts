import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInspectorDTO {
  @IsNotEmpty()
  @IsString()
  liscense: string;
}
