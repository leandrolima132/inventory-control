/* eslint-disable @typescript-eslint/no-unused-vars */
import { User as PrismaUser } from '@prisma/client';
import { User } from '@domain/user/entities/user.entity';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return { ...user };
  }

  static toDomain(prismaUser: PrismaUser): User {
    return { ...prismaUser };
  }
}
