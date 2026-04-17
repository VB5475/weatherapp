import { getCategoryBadgeClass, getCategoryLabel } from '../services/api';
import './MetricCard.css';

export default function MetricCard({ title, icon, actual, normal, departure, category, delay = 0 }) {
  const departureNum = parseFloat(departure);
  const isPositive = departureNum > 0;
  const isZero = departureNum === 0 || isNaN(departureNum);

  return (
    <div className="metric-card glass-card fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="metric-card-header">
        <span className="metric-card-icon">{icon}</span>
        <span className={`badge ${getCategoryBadgeClass(category)}`}>
          {getCategoryLabel(category)}
        </span>
      </div>

      <h3 className="metric-card-title">{title}</h3>

      <div className="metric-card-value">
        <span className="value-main">{actual}</span>
        <span className="value-unit">mm</span>
      </div>

      <div className="metric-card-details">
        <div className="metric-detail">
          <span className="detail-label">Normal</span>
          <span className="detail-value">{normal} mm</span>
        </div>
        <div className="metric-detail">
          <span className="detail-label">Departure</span>
          <span className={`detail-value ${isPositive ? 'positive' : ''} ${!isPositive && !isZero ? 'negative' : ''}`}>
            {departure}
          </span>
        </div>
      </div>

      <div className="metric-card-bar">
        <div
          className="metric-card-bar-fill"
          style={{
            width: `${Math.min(Math.max((parseFloat(actual) / Math.max(parseFloat(normal), 0.01)) * 100, 0), 100)}%`,
            background: isPositive
              ? 'linear-gradient(90deg, var(--accent-green), var(--accent-secondary))'
              : 'linear-gradient(90deg, var(--accent-red), var(--accent-amber))',
          }}
        />
      </div>
    </div>
  );
}
