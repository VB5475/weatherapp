import './RnbLoader.css';

const EMBLEM_SRC = `${import.meta.env.BASE_URL}rnb-login/emblem.jpg`;

/**
 * @param {'fullscreen' | 'page' | 'inline' | 'overlay'} variant
 */
export default function RnbLoader({
  message = 'Loading',
  variant = 'page',
  className = '',
}) {
  return (
    <div
      className={`rnb-loader rnb-loader--${variant} ${className}`.trim()}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {variant === 'fullscreen' || variant === 'overlay' ? (
        <div className="rnb-loader-backdrop" aria-hidden />
      ) : null}

      <div className="rnb-loader-card">
        <div className="rnb-loader-visual" aria-hidden>
          <span className="rnb-loader-orbit rnb-loader-orbit--a" />
          <span className="rnb-loader-orbit rnb-loader-orbit--b" />
          <span className="rnb-loader-orbit rnb-loader-orbit--c" />
          <span className="rnb-loader-glow" />
          <span className="rnb-loader-emblem-wrap">
            <img
              src={EMBLEM_SRC}
              alt=""
              className="rnb-loader-emblem"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('is-fallback');
              }}
            />
            <span className="rnb-loader-emblem-fallback">R&B</span>
          </span>
        </div>

        {message ? (
          <p className="rnb-loader-message">
            {message}
            <span className="rnb-loader-dots" aria-hidden />
          </p>
        ) : null}
      </div>
    </div>
  );
}
