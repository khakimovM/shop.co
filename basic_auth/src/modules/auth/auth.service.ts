import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/database/database.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(userData: RegisterAuthDto) {
    const findUser = await this.prisma.users.findFirst({
      where: { email: userData.email },
    });
    if (findUser) throw new ConflictException('email already existed');
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = await this.prisma.users.create({
      data: { ...userData, password: hashedPassword },
    });
    const token = await this.jwt.signAsync({ userId: user.id });
    return { token, email: user.email };
  }
  async login(userData: LoginAuthDto) {
    const findUser = await this.prisma.users.findFirst({
      where: { email: userData.email },
    });
    if (!findUser) throw new NotFoundException('User not found');
    const compare = await bcrypt.compare(userData.password, findUser.password);
    if (!compare)
      throw new UnauthorizedException('email or password incorrect');
    const token = await this.jwt.signAsync({ userId: findUser.id });
    return { token };
  }
}
