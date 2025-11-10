import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from "@nestjs/common";
import { OpenAiService } from "./openai.service";

@Controller("chat")
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async chat(@Body("userId") userId: string, @Body("message") message: string) {
    try {
      if (!userId || !message) {
        throw new HttpException("userId and message are required", HttpStatus.BAD_REQUEST);
      }
      const response = await this.openAiService.chatWithAI(userId, message);
      return { response };
    } catch (error) {
      console.error("Controller error:", error);
      throw new HttpException(
        error.message || "Failed to process chat request",
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
