import { HttpStatus } from '@nestjs/common';
import { ApiResponseProperty } from '@nestjs/swagger';

export abstract class DefaultResponse<T> {
  abstract get data(): T | T[];

  @ApiResponseProperty({
    example: HttpStatus.CREATED,
  })
  status: HttpStatus;
  @ApiResponseProperty({
    example: 'Mensagem exemplo',
  })
  message: string;
}
