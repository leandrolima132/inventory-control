import { Injectable } from '@nestjs/common';
import { UserRepository } from '@domain/user/repositories';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {}
}
