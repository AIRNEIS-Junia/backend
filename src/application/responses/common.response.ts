import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CommonBadRequestResponse {
  @ApiProperty()
  @IsString()
  message: string | string[];

  @ApiProperty()
  @IsString()
  error: string;

  @ApiProperty({ default: 400 })
  @IsNumber()
  statusCode: number;
}

export class CommonNotFoundResponse {
  @ApiProperty()
  @IsString()
  message: string | string[];

  @ApiProperty()
  @IsString()
  error: string;

  @ApiProperty({ default: 404 })
  @IsNumber()
  statusCode: number;
}
