import { useState } from 'react';
import { generateCode } from '../api/codeApi';

export const useCodeGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const generate = async (prompt, language) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateCode(prompt, language);
      setResult(data);
    } catch (err) {
      setError(err.error || 'An error occurred. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearResult = () => {
    setResult(null);
    setError(null);
  };

  return { loading, error, result, generate, clearResult };
};