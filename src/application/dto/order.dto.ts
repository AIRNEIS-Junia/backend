// src/orders/dto/order-create.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({
    description: 'ID of the product',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  @IsUUID()
  slug: string;

  @ApiProperty({ description: 'Quantity of the product', example: 2 })
  @IsNotEmpty()
  quantity: number;
}

export class OrderDto {
  @ApiProperty({
    description: 'ID of the order',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Slug of the product',
    example: 'slug-example-1',
  })
  @IsUUID()
  slug: string;

  @ApiProperty({ description: 'Quantity of the product', example: 2 })
  quantity: number;

  @ApiProperty({
    description: 'ID of the shipping address',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  @IsUUID()
  addressId: string;

  @ApiProperty({
    description: 'ID of the credit card',
    example: 'e8b1c3d0-4b70-4f34-9c55-f2a8a5c54c34',
  })
  @IsUUID()
  creditCardId: string;
}

export class OrderCreateDto {
  @ApiProperty({
    type: [OrderItemDto],
    description: 'List of order items',
    example: [
      { slug: 'slug-example-1', quantity: 2 },
      { slug: 'slug-example-2', quantity: 3 },
    ],
  })
  @IsArray()
  @IsNotEmpty()
  items: OrderItemDto[];

  @ApiProperty({
    description: 'ID of the shipping address',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  @IsUUID()
  addressId: string;

  @ApiProperty({
    description: 'ID of the credit card',
    example: 'e8b1c3d0-4b70-4f34-9c55-f2a8a5c54c34',
  })
  @IsUUID()
  creditCardId: string;
}
