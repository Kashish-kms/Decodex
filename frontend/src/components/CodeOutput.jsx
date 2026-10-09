import hljs from 'highlight.js';
import { useEffect, useRef, useState } from 'react';
import '../styles/components.css';

const LANG_ICONS = {
  python: '🐍',
  javascript: '🟨',
  typescript: '🔷',
  java: '☕',
  cpp: '⚙️',
  csharp: '🔵',
  go: '🐹',
  rust: '🦀',
  php: '🐘',
  ruby: '💎',
  swift: '🦅',
  kotlin: '🎯',
};

function CodeOutput({ code, language, onClear }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const icon = LANG_ICONS[language] ?? '📄';

  return (
    <div className="code-output" id="code-output-section">
      {/* Terminal-style header */}
      <div className="output-header">
        <div className="output-title-wrap">
          <div className="terminal-dots">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
          </div>
          <span className="output-title">
            Generated Code
            <span className="lang-badge">
              {icon} {language}
            </span>
          </span>
        </div>

        <div className="output-actions">
          <button
            onClick={copyToClipboard}
            className="copy-btn"
            id="copy-code-btn"
            title="Copy to clipboard"
          >
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
          <button
            onClick={onClear}
            className="clear-btn"
            id="clear-output-btn"
            title="Clear output"
          >
            ✕ Clear
          </button>
        </div>
      </div>

      {/* Code block */}
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeOutput;