import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const showNewDesign = import.meta.env.VITE_NEW_DESIGN === 'true';

export default function Sidebar({ newDesignMode, onToggleMode }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">
          <span className="brand-icon-text">R</span>
        </div>
        <div className="brand-info">
          <h1 className="brand-title">RNB</h1>
          <p className="brand-subtitle">Roads & Buildings</p>
        </div>
      </div>

      <div className="sidebar-section-label">OVERVIEW</div>

      <nav className="sidebar-nav">
        {newDesignMode ? (
          /* New Design mode — only show the New Design tab */
          <div className="sidebar-link active" style={{ cursor: 'default' }}>
            <span className="sidebar-link-icon">🚀</span>
            <span className="sidebar-link-label">New Design</span>
          </div>
        ) : (
          /* Weather mode — show the Weather Dashboard tab */
          <NavLink to="/" end className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            <span className="sidebar-link-icon">🌦️</span>
            <span className="sidebar-link-label">Weather Dashboard</span>
          </NavLink>
        )}
      </nav>

      <div className="sidebar-footer">
        {showNewDesign ? (
          <div className="sidebar-footer-card sidebar-footer-card-clickable" onClick={onToggleMode}>
            <div className="sidebar-footer-icon">🏛️</div>
            <p className="sidebar-footer-text">Gujarat RNB</p>
            <p className="sidebar-footer-subtext">
              {newDesignMode ? '← Back to Weather' : 'View New Dashboard →'}
            </p>
          </div>
        ) : (
          <div className="sidebar-footer-card">
            <div className="sidebar-footer-icon">🏛️</div>
            <p className="sidebar-footer-text">Gujarat RNB</p>
            <p className="sidebar-footer-subtext">Weather Intelligence</p>
          </div>
        )}
      </div>
    </aside>
  );
}
