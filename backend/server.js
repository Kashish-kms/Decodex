import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '.env');

console.log(`📁 Loading .env from: ${envPath}`);
console.log(`📁 .env exists: ${fs.existsSync(envPath)}`);

const envConfig = dotenv.config({ path: envPath });

if (envConfig.error) {
  console.error('❌ Error loading .env:', envConfig.error.message);
} else {
  console.log('✅ .env loaded successfully');
  console.log('📋 Loaded keys:', Object.keys(envConfig.parsed || {}));
}

const apiKey = process.env.OPENROUTER_API_KEY;
const provider = process.env.PROVIDER || 'openrouter';
const model = process.env.MODEL || 'google/gemma-4-26b-a4b';

console.log(`\n🔑 Configuration Check:`);
console.log(`   - Provider: ${provider}`);
console.log(`   - Model: ${model}`);
console.log(`   - API Key: ${apiKey ? 'YES ✅' : 'NO ❌'}`);
console.log(`   - Key Length: ${apiKey ? apiKey.length : 0}`);
console.log(`   - Key Preview: ${apiKey ? apiKey.substring(0, 20) + '...' : 'N/A'}`);

if (!apiKey) {
  console.error('\n❌ CRITICAL: OPENROUTER_API_KEY is missing!');
  console.error('Make sure .env file contains: OPENROUTER_API_KEY=sk-or-v1-...');
  process.exit(1);
}

import app from './src/app.js';

const PORT = process.env.PORT || 5000;

console.log('\n=================================');
console.log('🚀 DECODEX SERVER STARTING');
console.log('=================================');
console.log(`✅ Provider: ${provider}`);
console.log(`✅ Model: ${model}`);
console.log(`✅ API Key: LOADED`);
console.log(`✅ PORT: ${PORT}`);
console.log(`✅ NODE_ENV: ${process.env.NODE_ENV}`);
console.log('=================================\n');

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoint: http://localhost:${PORT}/api/generate`);
  console.log(`🤖 Model: ${model}`);
  console.log(`✅ Ready to generate code!\n`);
});