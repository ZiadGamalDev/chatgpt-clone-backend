import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cors());

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
