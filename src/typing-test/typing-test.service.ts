import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TypingTestService {
  constructor(private prisma: PrismaService) {}

  async createTest(data: Prisma.TypingTestUncheckedCreateInput) {
    return this.prisma.typingTest.create({ data });
  }

  async getTestsByUserId(userId: number) {
    return this.prisma.typingTest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
