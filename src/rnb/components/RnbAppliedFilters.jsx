import { X } from 'lucide-react';
import './RnbAppliedFilters.css';

/**
 * @param {{ label: string, value: string }[]} filters
 */
export default function RnbAppliedFilters({ filters = [], onClearAll }) {
  if (!filters?.length) return null;

  const visible = filters.slice(0, 4);
  const extra = filters.length - visible.length;

  return (
    <div className="rnb-applied-filters" role="region" aria-label="Applied filters">
      <div className="rnb-applied-filters-chips">
        {visible.map((f, i) => (
          <span key={`${f.label}-${i}`} className="rnb-applied-filter-chip">
            <span className="rnb-applied-filter-chip-label">{f.label}:</span>
            <span className="rnb-applied-filter-chip-value">{f.value}</span>
          </span>
        ))}
        {extra > 0 && (
          <span className="rnb-applied-filter-more">+{extra} more</span>
        )}
      </div>
      {onClearAll && (
        <button
          type="button"
          className="rnb-applied-filters-clear"
          onClick={onClearAll}
          aria-label="Clear all filters"
          title="Clear all filters"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
