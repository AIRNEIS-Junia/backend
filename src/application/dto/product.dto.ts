import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ required: false })
  @IsString({ each: true })
  @IsOptional()
  images: string[];

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

export class CategoryFindByIdDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class CategoryFindByNameDto {
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
  slug: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  image: string;
}

export class ProductTypeCreateDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class ProductCursorDto {
  @ApiProperty({ required: false })
  @IsUUID()
  @IsOptional()
  cursor?: string;
}

export class ProductByIdDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
