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
    <>
      {/* ── Deep Space Background ── */}
      <div className="space-bg" aria-hidden="true">
        <div className="stars-canvas" />
      </div>

      {/* ── App Shell ── */}
      <div className="home-container">
        <Header />

        {/* ── Hero ── */}
        <section className="hero" aria-label="Hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-eyebrow">
            AI-Powered Code Generation
          </div>
          <h1 className="hero-title">
            <span className="hero-title-plain">Generate Code</span>
            <span className="hero-title-gradient">with AI Superpowers</span>
          </h1>
          <p className="hero-subtitle">
            Describe what you want to build and Decodex transforms your ideas
            into production-ready code instantly.
          </p>
        </section>

        {/* ── Main Content ── */}
        <main className="main-content" id="main">
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
              <div className="error-message" role="alert">
                <p>❌ {error}</p>
                <button onClick={clearResult} id="dismiss-error-btn">
                  Dismiss
                </button>
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

        {/* ── Footer ── */}
        <footer className="footer">
          <p>
            Built with ❤️ by{' '}
            <a
              href="https://github.com/Kashish-kms/Decodex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kashish
            </a>{' '}
            · Powered by OpenAI
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;