import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { NEW_DESIGN_MODULES } from '../dummyModules';

const showNewDesign = import.meta.env.VITE_NEW_DESIGN === 'true';

export default function Sidebar({ newDesignMode, onToggleMode, collapsed, onToggleCollapse, activeSubModule, setActiveSubModule }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">
          <span className="brand-icon-text">R</span>
        </div>
        {!collapsed && (
          <div className="brand-info">
            <h1 className="brand-title">RNB</h1>
            <p className="brand-subtitle">Roads & Buildings</p>
          </div>
        )}
        <button className="sidebar-collapse-btn" onClick={onToggleCollapse} title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {!collapsed && <div className="sidebar-section-label">OVERVIEW</div>}

      <nav className="sidebar-nav">
        {newDesignMode ? (
          /* New Design mode — hierarchical module list */
          <>
            <div
              className={`sidebar-link ${!activeSubModule ? 'active' : ''}`}
              style={{ cursor: 'pointer', marginBottom: '16px' }}
              onClick={() => setActiveSubModule(null)}
            >
              <span className="sidebar-link-icon">🏠</span>
              <span className="sidebar-link-label">All Modules Home</span>
            </div>

            {NEW_DESIGN_MODULES.map(mainMod => (
              <div key={mainMod.id} className="sidebar-main-module">
                {!collapsed && <div className="sidebar-section-label" style={{ paddingLeft: 0 }}>{mainMod.name}</div>}

                {mainMod.submodules.map(subMod => (
                  <div
                    key={subMod.id}
                    className={`sidebar-link ${activeSubModule === subMod.id ? 'active' : ''}`}
                    style={{ cursor: 'pointer', paddingLeft: collapsed ? '12px' : '24px' }}
                    onClick={() => {
                      sessionStorage.setItem('navSource', 'sidebar');
                      sessionStorage.setItem('navDirection', 'next'); // direction doesn't matter for sidebar
                      setActiveSubModule(subMod.id);
                    }}
                    title={collapsed ? subMod.name : undefined}
                  >
                    <span className="sidebar-link-icon">{subMod.icon}</span>
                    <span className="sidebar-link-label">{subMod.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </>
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
            {!collapsed && (
              <>
                <p className="sidebar-footer-text">Gujarat RNB</p>
                <p className="sidebar-footer-subtext">
                  {newDesignMode ? '← Back to Weather' : 'View New Dashboard →'}
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="sidebar-footer-card">
            <div className="sidebar-footer-icon">🏛️</div>
            {!collapsed && (
              <>
                <p className="sidebar-footer-text">Gujarat RNB</p>
                <p className="sidebar-footer-subtext">Weather Intelligence</p>
              </>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
