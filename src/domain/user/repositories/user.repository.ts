import { User } from '@domain/user/entities/user.entity';
import { DefaultResponse } from '@helpers/interfaces';

export abstract class UserRepository {
  abstract create(data: User): Promise<DefaultResponse<User>>;
}
