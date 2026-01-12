import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variable (set in .env file as VITE_GEMINI_API_KEY)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const gradeMission = async (mission, answer) => {
    // Mock response if no key or for testing
    if (!API_KEY) {
        console.warn("No Gemini API Key provided. Returning mock data.");
        return new Promise(resolve => {
            setTimeout(() => {
                // Simple logic to vary score based on answer length for "realism" in mock
                const scoreBase = Math.min(answer.length > 50 ? 80 : 50, 95);
                resolve({
                    logic: scoreBase + Math.floor(Math.random() * 10),
                    knowledge: scoreBase - 5 + Math.floor(Math.random() * 10),
                    creativity: scoreBase + 2 + Math.floor(Math.random() * 10),
                    feedback: "Great analysis of the ecosystem constraints. Your solution was creative but could use more specific data on water retention."
                });
            }, 1500);
        });
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        // Using gemini-2.0-flash - current stable model (free tier friendly!)
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
      You are an education AI for the IKIRARO platform. 
      Grade this student answer for a High School level mission.
      
      Mission Context: ${mission}
      Student Answer: ${answer}
      
      Analyze for Logic, Subject Knowledge, and Creativity.
      Return strictly a JSON object with this format (no markdown): 
      { "logic": number(0-100), "knowledge": number(0-100), "creativity": number(0-100), "feedback": "short constructive feedback string" }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Cleanup markdown code blocks if present
        const jsonStr = text.replace(/```json|```/g, "").trim();
        return JSON.parse(jsonStr);

    } catch (error) {
        console.error("AI Error:", error);
        return { logic: 0, knowledge: 0, creativity: 0, feedback: "Error connecting to AI service." };
    }
};
