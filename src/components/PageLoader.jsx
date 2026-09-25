export default function PageLoader({ message = 'Loading…' }) {
  return (
    <div className="weather-page-loader" role="status" aria-live="polite">
      <div className="weather-page-loader-spinner" aria-hidden />
      <p>{message}</p>
    </div>
  );
}
