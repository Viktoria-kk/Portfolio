import './LoadingSpinner.scss';

function LoadingSpinner({ fullPage = false }) {
  return (
    <div className={fullPage ? 'spinner-wrap spinner-wrap--full' : 'spinner-wrap'}>
      <div className="spinner" aria-label="Loading" />
    </div>
  );
}

export default LoadingSpinner;
