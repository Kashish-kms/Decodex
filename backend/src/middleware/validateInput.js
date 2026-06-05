const supportedLanguages = [
  'python',
  'javascript',
  'typescript',
  'java',
  'cpp',
  'csharp',
  'go',
  'rust',
  'php',
  'ruby',
  'swift',
  'kotlin',
];

export const validateInput = (req, res, next) => {
  const { prompt, language } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({
      error: 'Prompt is required and must be a non-empty string.',
    });
  }

  if (
    !language ||
    !supportedLanguages.includes(language.toLowerCase())
  ) {
    return res.status(400).json({
      error: `Language must be one of: ${supportedLanguages.join(', ')}`,
    });
  }

  next();
};