import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ChatDocument = Chat & Document;

class Message {
  @Prop({ required: true, enum: ["user", "bot"] })
  role: "user" | "bot";

  @Prop({ required: true })
  text: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

@Schema({ timestamps: true })
export class Chat {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [Message], default: [] })
  messages: Message[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
