import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Only handle OPTIONS requests without setting CORS headers
  // Let Cloudflare handle all CORS headers to avoid duplicates
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      // Respond to OPTIONS requests without setting any headers
      // Cloudflare will add the CORS headers
      res.status(204).send();
      return;
    }
    next();
  });
  
  app.useStaticAssets(join(__dirname, '..', 'src', 'public'));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`MongoDB URI: ${process.env.MONGO_URI ? 'Connected' : 'Not configured'}`);
  console.log(`OpenAI API Key: ${process.env.OPENAI_API_KEY ? 'Configured' : 'Missing'}`);
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
