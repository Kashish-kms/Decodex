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
    <div className="prompt-form">
      <div className="form-group">
        <label htmlFor="prompt">Enter Your Code Prompt</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Write a Python function to reverse a linked list"
          rows="6"
          disabled={loading}
        />
      </div>

      <div className="form-row">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          disabled={loading}
        />
        <button
          onClick={onGenerate}
          disabled={loading || !prompt.trim()}
          className="generate-btn"
        >
          {loading ? 'Generating...' : '✨ Generate Code'}
        </button>
      </div>
    </div>
  );
}

export default PromptForm;