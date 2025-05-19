import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller("chat-history")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getChatHistory(@Query("userId") userId: string) {
    return this.chatService.getChatHistory(userId);
  }
}
