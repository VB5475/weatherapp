import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import { NEW_DESIGN_MODULES } from '../dummyModules';

export default function Header({ newDesignMode, darkMode, onToggleDarkMode, activeSubModule }) {
  const [dateTime, setDateTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = dateTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  let newDesignTitle = 'RNB New Design Dashboard';
  let newDesignSubtitle = 'Roads & Buildings Department — Gujarat';

  if (newDesignMode && activeSubModule) {
    for (const mainMod of NEW_DESIGN_MODULES) {
      const subMod = mainMod.submodules.find(s => s.id === activeSubModule);
      if (subMod) {
        newDesignTitle = subMod.name;
        newDesignSubtitle = `${mainMod.name} > Dashboard Overview`;
        break;
      }
    }
  } else if (newDesignMode && !activeSubModule) {
    newDesignSubtitle = 'Integrated Module > All Modules Overview';
  }

  return (
    <header className="header">
      <div className="header-left">
        {!newDesignMode && location.pathname === '/districts' && (
          <Link to="/" className="home-btn" title="Back to Dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
        )}
        <div className="header-titles">
          <h2 className="header-title">
            {newDesignMode ? newDesignTitle : 'RNB Weather Dashboard'}
          </h2>
          <span className="header-subtitle">
            {newDesignMode ? newDesignSubtitle : 'Real-time Weather Intelligence for RNB'}
          </span>
        </div>
      </div>
      <div className="header-right">
        {newDesignMode && (
          <div className="header-theme-toggle" onClick={onToggleDarkMode}>
            <span className="header-toggle-label">{darkMode ? '🌙 Dark' : '☀️ Light'}</span>
            <div className={`header-toggle-switch${darkMode ? ' on' : ''}`} />
          </div>
        )}
        <div className="header-datetime">
          <span className="header-date">{formattedDate}</span>
          <span className="header-time">{formattedTime}</span>
        </div>
        <div className="header-status">
          <span className="status-dot" />
          <span className="status-text">Live</span>
        </div>
      </div>
    </header>
  );
}

