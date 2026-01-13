
import { GoogleGenAI, Type } from "@google/genai";

// Always use a named parameter for the API key as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSchemeRecommendation = async (userPrompt: string) => {
  if (!process.env.API_KEY) return null;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is asking about government schemes in India. User prompt: "${userPrompt}". 
      Analyze the user's situation and suggest keywords or categories for schemes they should look for. 
      Return the answer in plain helpful text.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    // Correctly access the .text property (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return null;
  }
};

export const getSmartEligibilityCheck = async (profile: any) => {
  if (!process.env.API_KEY) return "Please search manually.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Check potential scheme eligibility for an Indian citizen with this profile: ${JSON.stringify(profile)}.
      Summarize which types of central or state schemes (Farmer, Women, Student, etc.) they likely qualify for.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    // Correctly access the .text property (not a method).
    return response.text;
  } catch (error) {
    return "Error fetching smart recommendations.";
  }
};
