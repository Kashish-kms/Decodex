import { logger } from '../utils/logger.js';

export const generateCodeWithOpenAI = async (prompt, language) => {
  try {
    const model = process.env.MODEL || 'google/gemma-4-26b-a4b';
    logger.info(`Generating ${language} code using ${model}...`);

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY is not set');
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Decodex',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: `You are an expert code generator. Generate clean, well-commented, and optimized code in ${language}. Return ONLY the code without any markdown, backticks, code blocks, or explanations.`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error (${response.status}): ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const generatedCode = data.choices[0].message.content.trim();

    // Remove markdown code blocks if present
    let cleanCode = generatedCode;
    if (cleanCode.startsWith('```')) {
      cleanCode = cleanCode.replace(/^```[\w]*\n?/, '').replace(/\n?```$/, '');
    }

    logger.info('✅ Code generated successfully');

    return cleanCode;
  } catch (error) {
    logger.error(`Code Generation Error: ${error.message}`);
    throw new Error(`Failed to generate code: ${error.message}`);
  }
};