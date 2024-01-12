import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserFindByIdDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class UserUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @ValidateIf((e) => e.newPassword.length > 0)
  @MinLength(6)
  @MaxLength(30)
  currentPassword: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @ValidateIf((e) => e.currentPassword.length > 0)
  @MinLength(6)
  @MaxLength(30)
  newPassword: string;
}

export class UserAddressCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  streetNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  additional: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  @MinLength(5)
  zipCode: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  country: string;
}

export class UserAddressUpdateDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  street: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  streetNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  additional: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(6)
  @MinLength(5)
  zipCode: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  country: string;
}
