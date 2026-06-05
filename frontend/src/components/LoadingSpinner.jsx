import '../styles/components.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Generating your code...</p>
    </div>
  );
}

export default LoadingSpinner;