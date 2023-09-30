import { Injectable } from '@nestjs/common';
import { UserRepository } from '@domain/user/repositories';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {}
}
