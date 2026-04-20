import React from 'react';
import { NEW_DESIGN_MODULES } from '../dummyModules';
import './ModulesOverview.css';

export default function ModulesOverview({ darkMode, onSubModuleClick }) {
  return (
    <div className={`modules-overview ${darkMode ? 'dark-mode' : ''}`}>
      {NEW_DESIGN_MODULES.map(mainMod => (
        <div key={mainMod.id} className="module-section">
          <div className="module-section-header">
            <span className="module-section-icon">{mainMod.icon}</span>
            <h3 className="module-section-title">{mainMod.name}</h3>
            <button className="collapse-section-btn">—</button>
          </div>
          
          <div className="submodules-grid">
            {mainMod.submodules.map((subMod, idx) => (
              <div 
                key={subMod.id} 
                className="submodule-card stagger-item"
                style={{ '--idx': idx }}
                onClick={() => onSubModuleClick(subMod.id)}
              >
                <div className="submodule-card-header">
                  <div className="submodule-title-row">
                    <div className="submodule-icon-box">{subMod.icon}</div>
                    <span className="submodule-name">{subMod.name}</span>
                  </div>
                  <div className="submodule-subtitle-row">
                    <span className="submodule-subtitle-dot" />
                    <span className="submodule-subtitle">{subMod.subtitle}</span>
                    <span className="submodule-manual-link">Manual →</span>
                  </div>
                </div>

                <div className="submodule-stats-grid">
                  {subMod.stats.map((stat, idx) => (
                    <div key={idx} className={`stat-box color-${stat.color}`}>
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-value">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
