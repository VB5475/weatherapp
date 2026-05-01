import './Sidebar.css';

export default function Sidebar() {
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
        <div className="sidebar-link active" style={{ cursor: 'default' }}>
          <span className="sidebar-link-icon">🌦️</span>
          <span className="sidebar-link-label">Weather Dashboard</span>
          <span className="sidebar-active-dot" />
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-card">
          {/* <div className="sidebar-footer-icon">🏛️</div>
          <p className="sidebar-footer-text">Gujarat RNB</p>
          <p className="sidebar-footer-subtext">Weather Intelligence</p>
          <div className="sidebar-footer-divider" /> */}
          <div className="sidebar-footer-source">
            <span className="sidebar-footer-source-label">Data Source</span>
            <div className="sidebar-footer-imd">
              <span className="sidebar-footer-imd-badge">IMD</span>
              <span className="sidebar-footer-imd-name">India Meteorological Department</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
