import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  description: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  image: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  slug: string;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  updatedAt: Date;
}

export class ProductTypeResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  name: string;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  updatedAt: Date;
}

export class ProductResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  description: string;

  @ApiProperty({
    type: [String],
    description: 'Field',
  })
  images: string[];

  @ApiProperty({
    type: Number,
    description: 'Field',
  })
  price: number;

  @ApiProperty({
    type: Number,
    description: 'Field',
  })
  quantity: number;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  categoryId: string;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'Field',
  })
  updatedAt: Date;

  @ApiProperty({
    type: ProductCategoryResponse,
    description: 'Field',
  })
  category: ProductCategoryResponse;

  @ApiProperty({
    type: [ProductTypeResponse],
    description: 'Field',
  })
  productTypes: ProductTypeResponse[];

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  slug: string;
}

export class ProductsPagination {
  @ApiProperty({ type: Number })
  total: number;

  @ApiProperty({ type: [ProductResponse] })
  results: ProductResponse[];
}
