/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UserRepository } from '@domain/user/repositories';

@Injectable()
export class FindUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {}
}
