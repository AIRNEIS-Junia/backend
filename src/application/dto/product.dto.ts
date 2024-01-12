import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ProductCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}

export class ProductCategoryCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class ProductTypeCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}