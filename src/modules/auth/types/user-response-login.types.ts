import { ApiProperty } from '@nestjs/swagger';
import { LoginTypeEnum } from '../enums/login-type.enum';

export class UserResponseLoginTypes {
  @ApiProperty({ example: '218926fe-a3fa-4381-af8e-77c4017ebdb8' })
  id: string;

  @ApiProperty({ example: 'Any Name' })
  name: string;

  @ApiProperty({ example: 'EmailParaTeste@teste.com' })
  email: string;

  @ApiProperty({ example: LoginTypeEnum.USER })
  type: LoginTypeEnum;

  @ApiProperty({ example: '2023-03-25T04:40:28.329Z' })
  created_at: Date;

  @ApiProperty({ example: '2023-03-25T04:45:27.883Z' })
  updated_at: Date;

  @ApiProperty({ example: true })
  policies: boolean;
}
