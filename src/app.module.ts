import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OpenAiModule } from './openai/openai.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI ?? 'mongodb://localhost:27017/chatgpt-clone'),
    OpenAiModule,
    ChatModule,
  ],
})
export class AppModule {}
