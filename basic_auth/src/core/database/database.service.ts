import {
  Injectable,
  InternalServerErrorException,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database connected');
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async onModuleDestroy() {
    try {
      await this.$disconnect();
      console.log('Database disconnected');
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
