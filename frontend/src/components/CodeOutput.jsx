import hljs from 'highlight.js';
import { useEffect, useRef } from 'react';
import '../styles/components.css';

function CodeOutput({ code, language, onClear }) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="code-output">
      <div className="output-header">
        <span className="output-title">📝 Generated {language} Code</span>
        <div className="output-actions">
          <button onClick={copyToClipboard} className="copy-btn">
            📋 Copy
          </button>
          <button onClick={onClear} className="clear-btn">
            ✕ Clear
          </button>
        </div>
      </div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

export default CodeOutput;