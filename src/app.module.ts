import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypingTestModule } from './typing-test/typing-test.module';
import { UserService } from './user/user.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UserModule, AuthModule, TypingTestModule],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}
