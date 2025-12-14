import { GoogleGenAI } from "@google/genai";
import { SCHOOL_CONTEXT } from '../constants';

// Safely access process.env to avoid ReferenceError in browser environments
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || '';
    }
  } catch (e) {
    console.warn('Error accessing process.env:', e);
  }
  return '';
};

export const generateSchoolResponse = async (userMessage: string): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return "I'm sorry, I'm currently offline (Configuration Error). Please contact the school office directly.";
  }

  try {
    // Initialize lazily to avoid startup crashes if key is missing
    const ai = new GoogleGenAI({ apiKey });
    
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are the helpful Virtual Admissions Assistant for KRR Academy. 
    Use the following school context to answer user questions politely and concisely. 
    If the answer isn't in the context, ask them to contact ${SCHOOL_CONTEXT} or visit the office.
    Keep answers under 3 sentences unless asked for details.
    
    School Context:
    ${SCHOOL_CONTEXT}
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I didn't quite catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};