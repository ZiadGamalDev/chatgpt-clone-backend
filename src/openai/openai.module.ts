import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from '../chat/chat.module';
import { OpenAiService } from './openai.service';
import { OpenAiController } from './openai.controller';

@Module({
  imports: [ConfigModule, ChatModule],
  providers: [OpenAiService],
  controllers: [OpenAiController],
})
export class OpenAiModule {}
