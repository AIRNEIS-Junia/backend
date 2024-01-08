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