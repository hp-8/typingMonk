import { Module } from '@nestjs/common';
import { TypingTestService } from './typing-test.service';
import { TypingTestController } from './typing-test.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TypingTestService],
  controllers: [TypingTestController],
})
export class TypingTestModule {}
