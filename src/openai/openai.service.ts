import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { ChatService } from "../chat/chat.service";

@Injectable()
export class OpenAiService {
  private readonly openAiUrl = "https://api.openai.com/v1/chat/completions";

  constructor(
    private readonly configService: ConfigService,
    private readonly chatService: ChatService
  ) {}

  async chatWithAI(userId: string, message: string) {
    try {
      const apiKey = this.configService.get<string>("OPENAI_API_KEY");
      const chatHistory = await this.chatService.getChatHistory(userId);
      const messages = [...chatHistory.slice(-10), { role: "user", text: message }];
      const formattedMessages = messages.map(m => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const response = await axios.post(
        this.openAiUrl,
        { model: "gpt-4o-mini", messages: formattedMessages },
        { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
      );

      const botResponse = response.data.choices[0].message.content;
      await this.chatService.saveMessage(userId, [{ role: "user", text: message }, { role: "bot", text: botResponse }]);

      return botResponse;
    } catch (error) {
      console.error("Error calling OpenAI:", error.response?.data || error.message);
      throw new Error("Failed to fetch response from OpenAI");
    }
  }
}
