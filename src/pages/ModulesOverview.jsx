import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { NEW_DESIGN_MODULES } from '../dummyModules';
import { statsGridCols } from '../utils/gridCols';
import './ModulesOverview.css';

const LS_KEY = 'rnb_favorites_v1';

// Flatten all submodules for easy lookup
const ALL_SUBMODULES = NEW_DESIGN_MODULES.flatMap(m =>
  m.submodules.map(s => ({ ...s, parentId: m.id, parentName: m.name }))
);

function getSubmodule(id) {
  return ALL_SUBMODULES.find(s => s.id === id);
}

/* ── Star button shown on hover over each card ── */
function FavoriteToggleBtn({ isFav, onClick }) {
  return (
    <motion.button
      className={`fav-toggle-btn ${isFav ? 'is-fav' : ''}`}
      onClick={e => { e.stopPropagation(); onClick(); }}
      whileTap={{ scale: 0.85 }}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFav ? '★' : '☆'}
    </motion.button>
  );
}

/* ── A single card in the Favorites tray ── */
function FavoriteCard({ subMod, onRemove, onNavigate }) {
  return (
    <Reorder.Item
      value={subMod.id}
      id={subMod.id}
      className="fav-card"
      /* ── Entry: expand from atom ── */
      initial={{ opacity: 0, scale: 0.08, originX: 0.5, originY: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.08 }}
      transition={{
        scale: { type: 'spring', stiffness: 420, damping: 22, mass: 0.8 },
        opacity: { duration: 0.18 },
      }}
      /* ── Drag feedback ── */
      whileDrag={{
        scale: 1.04,
        boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
        zIndex: 50,
        cursor: 'grabbing',
      }}
      layout
    >
      {/* drag handle area — clicking the body navigates */}
      <div
        className="fav-card-body"
        onClick={() => onNavigate(subMod.id)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onNavigate(subMod.id)}
      >
        <span className="fav-card-icon">{subMod.icon}</span>
        <div className="fav-card-text">
          <span className="fav-card-name">{subMod.name}</span>
          <span className="fav-card-parent">{subMod.parentName}</span>
        </div>
      </div>

      <div className="fav-card-stats">
        {subMod.stats.slice(0, 2).map((stat, i) => (
          <div key={i} className={`fav-stat color-${stat.color}`}>
            <span className="fav-stat-value">{stat.value}</span>
            <span className="fav-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <button
        className="fav-remove-btn"
        onClick={e => { e.stopPropagation(); onRemove(subMod.id); }}
        title="Remove from favorites"
      >
        ✕
      </button>
    </Reorder.Item>
  );
}

/* ── Empty state for the favorites tray ── */
function FavTrayEmpty() {
  return (
    <motion.div
      className="fav-tray-empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className="fav-tray-empty-icon">☆</span>
      <p>Star any module card to pin it here for quick access.</p>
    </motion.div>
  );
}

export default function ModulesOverview({ darkMode, onSubModuleClick }) {
  const cardRefs = useRef({});

  // favoriteIds is the ordered list of favorited submodule IDs
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const stored = localStorage.getItem(LS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const isFav = useCallback(
    (id) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const toggleFav = useCallback((id) => {
    setFavoriteIds(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  }, []);

  const removeFav = useCallback((id) => {
    setFavoriteIds(prev => prev.filter(f => f !== id));
  }, []);

  // The actual submodule objects in favorite order
  const favoriteSubmodules = favoriteIds
    .map(getSubmodule)
    .filter(Boolean);

  const handleCardClick = (subModId) => {
    const card = cardRefs.current[subModId];
    if (!card) { onSubModuleClick(subModId); return; }

    const rect = card.getBoundingClientRect();
    sessionStorage.setItem('navSource', 'card');
    sessionStorage.setItem('cardExpandOrigin', JSON.stringify({
      top: rect.top, left: rect.left,
      width: rect.width, height: rect.height,
    }));

    card.style.transition = 'transform 180ms cubic-bezier(0.32, 0.72, 0, 1)';
    card.style.transform = 'scale(0.97)';
    setTimeout(() => onSubModuleClick(subModId), 160);
  };

  return (
    <AnimatePresence mode="popLayout">
      <div className={`modules-overview ${darkMode ? 'dark-mode' : ''}`}>

        {/* ── Favorites Tray — only renders when there is at least one favorite ── */}
        {favoriteIds.length > 0 && (
          <motion.div
            className="fav-tray-section"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 340, damping: 28 }}
            layout
          >
            <div className="fav-tray-header">
              <span className="fav-tray-icon">★</span>
              <h3 className="fav-tray-title">My Favorites</h3>
              <span className="fav-tray-count">{favoriteIds.length}</span>
              <span className="fav-tray-hint">Drag to reorder</span>
            </div>

            <Reorder.Group
              axis="x"
              values={favoriteIds}
              onReorder={setFavoriteIds}
              className="fav-tray-list"
              as="div"
            >
              <AnimatePresence mode="popLayout">
                {favoriteSubmodules.map(subMod => (
                  <FavoriteCard
                    key={subMod.id}
                    subMod={subMod}
                    onRemove={removeFav}
                    onNavigate={handleCardClick}
                  />
                ))}
              </AnimatePresence>
            </Reorder.Group>
          </motion.div>
        )}

      {/* ── Main Module Grid ── */}
      {NEW_DESIGN_MODULES.map(mainMod => (
        <div key={mainMod.id} className="module-section">
          <div className="module-section-header">
            <span className="module-section-icon">{mainMod.icon}</span>
            <h3 className="module-section-title">{mainMod.name}</h3>
            <button className="collapse-section-btn">—</button>
          </div>

          <div className="submodules-grid">
            <AnimatePresence>
              {mainMod.submodules.map((subMod, idx) => (
                <motion.div
                  key={subMod.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    layout: { type: 'spring', stiffness: 300, damping: 28 },
                    opacity: { duration: 0.22 },
                    delay: idx * 0.04,
                  }}
                  ref={el => cardRefs.current[subMod.id] = el}
                  className={`submodule-card ${isFav(subMod.id) ? 'is-favorited' : ''}`}
                  onClick={() => handleCardClick(subMod.id)}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="submodule-card-header">
                    <div className="submodule-title-row">
                      <div className="submodule-icon-box">{subMod.icon}</div>
                      <span className="submodule-name">{subMod.name}</span>
                      <FavoriteToggleBtn
                        isFav={isFav(subMod.id)}
                        onClick={() => toggleFav(subMod.id)}
                      />
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
      </div>
    </AnimatePresence>
  );
}