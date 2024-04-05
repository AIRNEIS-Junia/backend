import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}

export class AuthRegisterDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  lastName: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(30)
  password: string;
}

export class AuthRefreshTokenDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
