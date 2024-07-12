import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDetailInspectorDTO {
  @IsNotEmpty()
  @IsNumber()
  inspectorID: number;

  @IsNotEmpty()
  @IsString()
  userID: string;
}
