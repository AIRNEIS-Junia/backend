import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CheckoutStatus } from '@prisma/client';

export class CheckoutDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  status: CheckoutStatus;
}

export class CheckoutAddressDto {
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
  streetNumber: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  checkoutId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ required: true })
  @IsString()
  additional: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
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

export class CheckoutItemDto {
  @ApiProperty({ required: true })
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  productId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  orderId: string;
}
