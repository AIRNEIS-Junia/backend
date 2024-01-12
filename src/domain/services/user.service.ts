import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import {
  UserAddressCreateDto,
  UserAddressUpdateDto,
  UserUpdateDto,
} from '../../application/dto/user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async update(data: UserUpdateDto, userId: string) {
    if (data.currentPassword) {
      const findUser = await this.userRepository.findById(userId);

      const verifyHash = await bcrypt.compare(
        data.currentPassword,
        findUser.password,
      );

      if (!verifyHash)
        throw new BadRequestException('USER_CURRENT_PASSWORD_WRONG');
    }

    await this.userRepository.update({
      ...data,
      id: userId,
    });

    return {
      status: 'success',
      message: 'user updated',
    };
  }

  async findAllAddressByUserId(userId: string) {
    const address = await this.userRepository.findAllAddressByUserId(userId);

    return {
      total: address.length,
      results: address,
    };
  }

  async createAddress(data: UserAddressCreateDto, userId: string) {
    console.log(userId);
    return this.userRepository.createAddress({
      ...data,
      userId,
    });
  }

  async updateAddress(id: string, data: UserAddressUpdateDto, userId: string) {
    const findAddress = await this.userRepository.findAddressById(id);

    if (!findAddress) throw new NotFoundException('USER_ADDRESS_NOT_FOUND');

    if (findAddress.userId !== userId) throw new ForbiddenException();

    return this.userRepository.updateAddressById({
      ...data,
      id,
    });
  }

  async deleteAddress(id: string, userId: string) {
    const findAddress = await this.userRepository.findAddressById(id);

    if (!findAddress) throw new NotFoundException('USER_ADDRESS_NOT_FOUND');

    if (findAddress.userId !== userId) throw new ForbiddenException();

    return {
      status: 'success',
      message: 'address deleted',
    };
  }
}
