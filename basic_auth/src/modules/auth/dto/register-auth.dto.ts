import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class RegisterAuthDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsStrongPassword()
  @IsString()
  password: string;
}
