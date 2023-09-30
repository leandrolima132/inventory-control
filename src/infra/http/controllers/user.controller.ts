import { CreateUserService } from '@domain/user/use-cases/create-user.service';
import { FindAllUsersService } from '@domain/user/use-cases/find-all-users.service';
import { FindUserByIdService } from '@domain/user/use-cases/find-user-by-id.service';
import { UpdateUserService } from '@domain/user/use-cases/update-user.service';
import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findAllUsersService: FindAllUsersService,
    private readonly findUserByIdService: FindUserByIdService,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Post('create')
  create() {
    return this.createUserService.execute();
  }

  @Get()
  findAll() {
    return this.findAllUsersService.execute();
  }

  @Get()
  findOne() {
    return this.findUserByIdService.execute();
  }

  @Patch()
  update() {
    return this.updateUserService.execute();
  }
}
