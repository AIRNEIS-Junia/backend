import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContactCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
