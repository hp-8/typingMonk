import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { TypingTestService } from './typing-test.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('typing-tests')
export class TypingTestController {
  constructor(private readonly typingTestService: TypingTestService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createTest(
    @Req() req,
    @Body() testData: { wpm: number; accuracy: number; duration: number },
  ) {
    return this.typingTestService.createTest({
      userId: req.user.id,
      wpm: testData.wpm,
      accuracy: testData.accuracy,
      duration: testData.duration,
    });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserTests(@Req() req) {
    return this.typingTestService.getTestsByUserId(req.user.id);
  }
}
