import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors";
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(cors());
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));

  await app.listen(process.env.PORT ?? 3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "mongodb://localhost:27017/chatgpt-clone");
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

connectDB();
bootstrap();
