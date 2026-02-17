
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Correctly initialize with named apiKey parameter using process.env.API_KEY directly
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getGameRecommendation(userPreference: string) {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User asks for: ${userPreference}. Recommend a game for Kekeyo Games and give a short fun reason why.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            gameTitle: { type: Type.STRING },
            reason: { type: Type.STRING },
            funFact: { type: Type.STRING }
          },
          required: ["gameTitle", "reason", "funFact"]
        }
      }
    });
    // response.text is a property getter, not a method
    return JSON.parse(response.text || '{}');
  }

  async getAiBuddyChat(message: string, history: { role: string; parts: string }[]) {
    const chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are Keke, the AI guide of Kekeyo Games. You are energetic, gamer-savvy, and use space metaphors.',
      }
    });

    const result = await chat.sendMessage({ message: message });
    // result.text is a property getter, not a method
    return result.text;
  }
}

export const geminiService = new GeminiService();
