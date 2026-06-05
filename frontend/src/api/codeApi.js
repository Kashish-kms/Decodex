import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

export const generateCode = async (prompt, language) => {
  try {
    const response = await api.post('/api/generate', {
      prompt,
      language,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || {
      error: 'Failed to generate code. Please try again.',
    };
  }
};

export default api;