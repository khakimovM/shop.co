import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Response } from 'express';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: RegisterAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('keldi');
    const ans = await this.authService.register(body);
    res.cookie('token', ans.token, {
      maxAge: 2.1 * 3600 * 1000,
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
    });
    return ans;
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() body: LoginAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ans = await this.authService.login(body);
    res.cookie('token', ans.token, {
      maxAge: 2.1 * 3600 * 1000,
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
    });
    return ans;
  }
}
