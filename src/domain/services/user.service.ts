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
  UserCreditCardCreateDto,
  UserCreditCardUpdateDto,
  UserUpdateDto,
} from '../../application/dto/user.dto';
import bcrypt from 'bcrypt';
import _ from 'lodash';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async me(userId: string) {
    const find = await this.userRepository.findById(userId);

    if (!find) throw new ForbiddenException();
  }

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
      ..._.omit(data, ['currentPassword', 'newPassword']),
      ...(data.currentPassword && {
        password: data.newPassword,
      }),
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

  async findAllCreditCardByUserId(userId: string) {
    const creditCard =
      await this.userRepository.findAllCreditCardByUserId(userId);

    return {
      total: creditCard.length,
      results: creditCard,
    };
  }

  async createCreditCard(data: UserCreditCardCreateDto, userId: string) {
    return this.userRepository.createCreditCard({
      ...data,
      userId,
    });
  }

  async updateCreditCard(
    id: string,
    data: UserCreditCardUpdateDto,
    userId: string,
  ) {
    const findCardNumber = await this.userRepository.findCreditCardById(id);

    if (!findCardNumber)
      throw new NotFoundException('USER_CREDIT_CARD_NOT_FOUND');

    if (findCardNumber.userId !== userId) throw new ForbiddenException();

    return this.userRepository.updateCreditCardById({
      ...data,
      id,
    });
  }

  async deleteCreditCard(id: string, userId: string) {
    const findCreditCard = await this.userRepository.findCreditCardById(id);

    if (!findCreditCard)
      throw new NotFoundException('USER_CREDIT_CARD_NOT_FOUND');

    if (findCreditCard.userId !== userId) throw new ForbiddenException();

    return {
      status: 'success',
      message: 'credit card deleted',
    };
  }
}
