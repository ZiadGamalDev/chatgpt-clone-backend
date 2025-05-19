import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Chat, ChatDocument } from "./chat.schema";

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  async getChatHistory(userId: string) {
    const chat = await this.chatModel.findOne({ userId });
    return chat ? chat.messages : [];
  }

  async saveMessage(userId: string, messages: { role: string; text: string }[]) {
    const chat = await this.chatModel.findOneAndUpdate(
      { userId },
      { $push: { messages: { $each: messages } } },
      { new: true, upsert: true }
    );

    return chat;
  }
}
