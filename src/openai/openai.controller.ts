import { Controller, Post, Body } from "@nestjs/common";
import { OpenAiService } from "./openai.service";

@Controller("chat")
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post()
  async chat(@Body("userId") userId: string, @Body("message") message: string) {
    return { response: await this.openAiService.chatWithAI(userId, message) };
  }
}
