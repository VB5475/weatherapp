import React, { useRef } from 'react';
import { NEW_DESIGN_MODULES } from '../dummyModules';
import { statsGridCols } from '../utils/gridCols';
import './ModulesOverview.css';

export default function ModulesOverview({ darkMode, onSubModuleClick }) {
  const cardRefs = useRef({});

  const handleCardClick = (subModId) => {
    const card = cardRefs.current[subModId];
    if (!card) { onSubModuleClick(subModId); return; }

    const rect = card.getBoundingClientRect();

    // Tag this as a card expand navigation
    sessionStorage.setItem('navSource', 'card');
    sessionStorage.setItem('cardExpandOrigin', JSON.stringify({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    }));

    card.style.transition = 'transform 180ms cubic-bezier(0.32, 0.72, 0, 1)';
    card.style.transform = 'scale(0.97)';

    setTimeout(() => {
      onSubModuleClick(subModId);
    }, 160);
  };

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
                ref={el => cardRefs.current[subMod.id] = el}
                className="submodule-card stagger-item"
                style={{ '--idx': idx }}
                onClick={() => handleCardClick(subMod.id)}
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

                <div
                  className="submodule-stats-grid"
                  style={{ gridTemplateColumns: statsGridCols(subMod.stats.length) }}
                >
                  {subMod.stats.map((stat, i) => (
                    <div key={i} className={`stat-box color-${stat.color}`}>
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