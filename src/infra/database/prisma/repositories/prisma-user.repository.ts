import { User } from '@domain/user/entities/user.entity';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { DefaultResponse } from '@helpers/interfaces';
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  async create(body: User): Promise<DefaultResponse<User>> {
    try {
      return {
        data: PrismaUserMapper.toDomain(body),
        status: HttpStatus.CREATED,
        message: 'Registro criado',
      };
    } catch (error) {}
  }
}
