import { Link } from 'react-router-dom';
import RnbStatCard from './RnbStatCard';
import RnbLoader from './RnbLoader';
import './SubmoduleOverviewCard.css';

const PREVIEW_STATUS_COUNT = 4;

function isTotalRow(row) {
  const label = String(row?.Label ?? '').trim().toLowerCase();
  return label === 'total' || label.startsWith('total ');
}

export default function SubmoduleOverviewCard({ module, delay = 0 }) {
  const { title, path, cardSections, loading, error } = module;
  const flatRows = cardSections.flatMap((s) => s.rows).filter(Boolean);
  const statusRows = flatRows.filter((r) => !isTotalRow(r));
  const previewRows = statusRows.slice(0, PREVIEW_STATUS_COUNT);
  const hiddenCount = Math.max(0, statusRows.length - previewRows.length);

  const cardClass =
    'submodule-overview glass-card fade-in-up' +
    (path ? ' submodule-overview--clickable' : '');

  const body = (
    <>
      <header className="submodule-overview-header">
        <div>
          <h3 className="submodule-overview-title">{title}</h3>
          {!loading && !error && statusRows.length > 0 && (
            <span className="submodule-overview-meta">
              Showing {previewRows.length} of {statusRows.length}
              {hiddenCount > 0 ? ' statuses' : ''}
            </span>
          )}
        </div>
      </header>

      {loading && (
        <RnbLoader variant="inline" message="Loading status" />
      )}

      {!loading && error && (
        <p className="submodule-overview-error">{error}</p>
      )}

      {!loading && !error && statusRows.length === 0 && (
        <p className="submodule-overview-empty">No status cards for this module.</p>
      )}

      {!loading && !error && statusRows.length > 0 && (
        <div className="submodule-overview-grid">
          {previewRows.map((row, i) => (
            <RnbStatCard
              key={`${row.Label}-${i}`}
              row={row}
              delay={delay + i * 25}
              colorKey={`${title}-${row.Label}-${i}`}
              static
            />
          ))}
        </div>
      )}
    </>
  );

  if (path) {
    return (
      <Link
        to={path}
        className={cardClass}
        style={{ animationDelay: `${delay}ms` }}
      >
        {body}
      </Link>
    );
  }

  return (
    <article
      className={cardClass}
      style={{ animationDelay: `${delay}ms` }}
    >
      {body}
    </article>
  );
}
