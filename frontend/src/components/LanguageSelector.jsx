function LanguageSelector({ language, setLanguage, disabled }) {
  const languages = [
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

  return (
    <div className="language-selector">
      <label htmlFor="language">Language</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        disabled={disabled}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;