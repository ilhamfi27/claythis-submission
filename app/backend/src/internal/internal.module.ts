import { Module } from '@nestjs/common';
import { InternalController } from './application/rest/internal.controller';
import { UserService } from 'src/user/domains/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [InternalController],
  providers: [UserService, PrismaService],
})
export class InternalModule {}
