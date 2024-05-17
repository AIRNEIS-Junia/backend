import { IsNotEmpty, IsString, IsNumber, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}

export class ProductFindByNameDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class ProductCategoryCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class ProductTypeCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}
