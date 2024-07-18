import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AccountDTO {
  @ApiProperty({
    name: 'userID',
    type: String,
    description: 'The id of user',
  })
  @IsNotEmpty()
  @IsString()
  userID: string;

  @ApiProperty({
    name: 'firstName',
    type: String,
    description: 'The first name of user',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    name: 'lastName',
    type: String,
    description: 'The last name of user',
  })
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiProperty({
    name: 'password',
    type: String,
    description: 'The password of user',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    name: 'address',
    type: String,
    description: 'The address of user',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    name: 'gender',
    type: Boolean,
    description: 'The gender of user',
  })
  @IsOptional()
  @IsBoolean()
  gender: boolean;

  @ApiProperty({
    name: 'email',
    type: String,
    description: 'The email of user',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    name: 'phoneNumber',
    type: String,
    description: 'The phone number of user',
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    name: 'SSN',
    type: String,
    description: 'The social security number of user',
  })
  @IsNotEmpty()
  @IsString()
  SSN: string;

  @ApiProperty({
    name: 'favotire',
    type: String,
    description: 'The favotire of user',
  })
  @IsOptional()
  @IsString()
  favotire: string;

  @ApiProperty({
    name: 'token',
    type: String,
    description: 'The token of user',
  })
  @IsOptional()
  @IsString()
  token: string;

  @ApiProperty({
    name: 'delflag',
    type: Boolean,
    description: 'The delflag of user',
  })
  @IsOptional()
  @IsBoolean()
  delflag: boolean;
}
