import { useState } from 'react';
import Header from '../components/Header';
import PromptForm from '../components/PromptForm';
import CodeOutput from '../components/CodeOutput';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCodeGeneration } from '../hooks/useCodeGeneration';
import '../styles/components.css';

function Home() {
  const { loading, error, result, generate, clearResult } =
    useCodeGeneration();
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('python');

  const handleGenerate = async () => {
    if (prompt.trim()) {
      await generate(prompt, language);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <div className="container">
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            language={language}
            setLanguage={setLanguage}
            onGenerate={handleGenerate}
            loading={loading}
          />

          {loading && <LoadingSpinner />}
          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
              <button onClick={clearResult}>Dismiss</button>
            </div>
          )}
          {result && (
            <CodeOutput
              code={result.code}
              language={result.language}
              onClear={clearResult}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;