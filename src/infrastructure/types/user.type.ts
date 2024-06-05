import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  email: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  roles: string;
}

export class UserAddressResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  phone: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  street: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  additional: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  zipCode: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  city: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  country: string;
}

export class UserCreateCardResponse {
  @ApiProperty({
    type: String,
    description: 'Field',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  cardNumber: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  expiryDate: string;

  @ApiProperty({
    type: String,
    description: 'Field',
  })
  cvv: string;
}
