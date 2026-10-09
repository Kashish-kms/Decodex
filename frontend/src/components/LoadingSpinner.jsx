import '../styles/components.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner-ring">
        <div className="spinner-core" />
      </div>
      <p>
        Generating your code
        <span className="loading-dots">
          <span />
          <span />
          <span />
        </span>
      </p>
    </div>
  );
}

export default LoadingSpinner;