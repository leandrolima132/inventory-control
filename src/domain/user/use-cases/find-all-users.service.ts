import { Injectable } from '@nestjs/common';
import { UserRepository } from '@domain/user/repositories';

@Injectable()
export class FindAllUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {}
}
