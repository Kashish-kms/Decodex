import { generateCodeWithOpenAI } from '../services/openaiService.js';
import { logger } from '../utils/logger.js';

export const generateCode = async (req, res, next) => {
  try {
    const { prompt, language } = req.body;

    logger.info(`Generating code for: ${language}`);

    const generatedCode = await generateCodeWithOpenAI(prompt, language);

    res.status(200).json({
      success: true,
      code: generatedCode,
      language: language,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error(`Error in generateCode: ${error.message}`);
    next(error);
  }
};