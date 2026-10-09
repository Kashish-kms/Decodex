import LanguageSelector from './LanguageSelector';
import '../styles/components.css';

function PromptForm({
  prompt,
  setPrompt,
  language,
  setLanguage,
  onGenerate,
  loading,
}) {
  return (
    <div className="glass-card prompt-form">
      {/* Card Header */}
      <div className="form-header">
        <div className="form-header-icon">✨</div>
        <div className="form-header-text">
          <h2>AI Code Generator</h2>
          <p>Describe what you want to build and let AI do the rest</p>
        </div>
      </div>

      {/* Prompt Textarea */}
      <div className="form-group">
        <label htmlFor="prompt">Your Prompt</label>
        <textarea
          id="prompt"
          className="prompt-textarea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Write a Python function to reverse a linked list with O(n) time complexity…"
          rows="6"
          disabled={loading}
        />
      </div>

      {/* Language + Button Row */}
      <div className="form-row">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          disabled={loading}
        />
        <button
          onClick={onGenerate}
          disabled={loading || !prompt.trim()}
          className={`generate-btn${loading ? ' loading-state' : ''}`}
          id="generate-code-btn"
        >
          <span className="btn-icon">{loading ? '⚡' : '✨'}</span>
          {loading ? 'Generating…' : 'Generate Code'}
        </button>
      </div>
    </div>
  );
}

export default PromptForm;