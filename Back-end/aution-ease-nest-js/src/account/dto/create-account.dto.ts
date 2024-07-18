import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAccountDTO {
  @ApiProperty({
    name: 'firstName',
    type: String,
    description: 'The first name of user',
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    name: 'lastName',
    type: String,
    description: 'The last name of user',
    example: 'Doe',
  })
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiProperty({
    name: 'password',
    type: String,
    description: 'The password of user',
    example: 'password123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    name: 'address',
    type: String,
    description: 'The address of user',
    example: '123 Main St',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    name: 'gender',
    type: Boolean,
    description: 'The gender of user',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  gender: boolean;

  @ApiProperty({
    name: 'email',
    type: String,
    description: 'The email of user',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    name: 'phoneNumber',
    type: String,
    description: 'The phone number of user',
    example: '1234567890',
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    name: 'SSN',
    type: String,
    description: 'The social security number of user',
    example: '123456789',
  })
  @IsNotEmpty()
  @IsString()
  SSN: string;

  @ApiProperty({
    name: 'favotire',
    type: String,
    description: 'The favotire of user',
    example: 'Traveling',
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
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  delflag: boolean;
}
